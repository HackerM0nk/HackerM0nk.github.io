---

layout: single
title: "Crypto-Shredding in Practice: Field-Level Encryption with Vault Transit at Scale"
date: 2025-08-29
permalink: /blog/crypto-shredding-with-vault-transit/
categories: [security]
tags: [data-security, vault, transit, crypto-shredding, nodejs, nosql, privacy, encryption]
excerpt: "A candid build-and-ship story: why we moved to field-level encryption, how Transit fits, the migration that didn’t melt the pager, and the outage that made us harden everything."
toc: true
toc_sticky: true
author_profile: false
read_time: true
classes: [wide, xl]
---

> **TL;DR** — We stopped letting databases hold our secrets in plaintext and made services encrypt fields **before** they touch storage. We used **HashiCorp Vault Transit** (no keys in apps), scoped keys so we can **crypto-shred** on demand, migrated live traffic with **dual-writes** + a **backfill**, and then—after an ugly incident—added **circuit breakers, short-TTL caches for low-sensitivity fields, and graceful degradation**. Now “delete” means “no one can decrypt,” not “we hope replicas and backups agree.”

---

## 0) Why crypto-shredding (in human words)

Lawyers ask for “prove you deleted it.” Storage systems answer “I deleted it… in this replica… eventually.” That mismatch is how arguments start.

We made peace by changing the **unit of deletion**: not the row, but the **ability to decrypt the row**. If we can **destroy the decryption path** (rotate past it or nuke the key), the bits can sit in a thousand backups and still be useless. That’s crypto-shredding.

**Simple rules we stuck to**

* Encrypt **in the service layer**, not inside the DB. The DB becomes a blob farm, not a key party.
* Use **Transit** as an HSM-ish envelope service. We send plaintext, get ciphertext. **Keys never live in app memory**.
* **Scope keys** to the thing you might need to shred: product/tenant/region/dataset, and sometimes per-user via derived context.
* **Decryption is a privilege**, not plumbing. It needs a purpose, policy, and audit trail. Treat the service as a potential decryption oracle and design accordingly.

---

## 1) What we actually built

A tiny shared library we call **`securitas`**. Every profile-facing service loads it at boot. It gives you:

* `encrypt(field, value, { key, context })` and `decrypt(field, blob, { key, context })`
* built-in metrics (QPS, p95/p99, error taxonomy), and “plaintext touched” counters
* **circuit breaking** and a **very short-TTL allowlisted cache** for low-sensitivity reads

**Happy path, without a diagram:**

1. Service calls Transit to **encrypt** → gets a ciphertext
2. Service stores ciphertext in NoSQL
3. On read, service fetches ciphertext
4. Service calls Transit to **decrypt** **only if** the caller is allowed to see it
5. Service returns either masked or plaintext based on policy

That’s the shape—no secrets at rest in the datastore, and no keys in the app.

---

## 2) Vault Transit: the bits that matter

**Key layout**

* One Transit **key per shred-scope** (e.g., `profiles.customer.v1`, `profiles.partner.v1`; sometimes per-tenant).
* Keys created with `deletion_allowed=true` so we can do **irreversible** deletion if policy requires.
* Keys set to `derived=true` and we pass a **context** like `tenant_id:user_id:field_name`. That keeps blast radii tight.
* Regular **rotation**: we advance `latest_version`. Apps **must** use `min_encryption_version = latest` and we can raise `min_decryption_version` when retiring old ciphertext.

**Node.js client sketch**

```js
import createVault from 'node-vault';

const vault = createVault({
  apiVersion: 'v1',
  endpoint: process.env.VAULT_ADDR,
  // Auth via cloud IAM / AppRole. We used cloud IAM per service.
});

export async function encrypt({ key, plaintext, context }) {
  const res = await vault.write(`transit/encrypt/${key}`, {
    plaintext: Buffer.from(plaintext, 'utf8').toString('base64'),
    context: context && Buffer.from(context, 'utf8').toString('base64'),
  });
  return res.data.ciphertext; // vault:vX:...
}

export async function decrypt({ key, ciphertext, context }) {
  const res = await vault.write(`transit/decrypt/${key}`, {
    ciphertext,
    context: context && Buffer.from(context, 'utf8').toString('base64'),
  });
  return Buffer.from(res.data.plaintext, 'base64').toString('utf8');
}
```

**Identity & policy shape**

* Each service authenticates to Vault with a **cloud IAM role** bound to only its Transit paths:

  * `transit/encrypt/profiles.customer.*`
  * `transit/decrypt/profiles.customer.*`
* We split **encrypt vs decrypt** policies where possible. Decrypt is rarer, more monitored, sometimes MFA-gated for ops tooling.
* **Audit devices** are on. Every decrypt log says “who, what, when, why (purpose string).”

---

## 3) Wiring it into services (and keeping plaintext out of your RAM)

We wrapped the client in a tiny facade that bakes in the guardrails:

```js
// securitas/index.js
import LRU from 'lru-cache';
import CircuitBreaker from 'opossum';
import * as transit from './transit-client.js';

const cache = new LRU({ max: 50_000, ttl: 30_000 }); // allowlisted fields only

const breaker = new CircuitBreaker(transit.decrypt, {
  timeout: 1500,                   // cut fast, probe later
  errorThresholdPercentage: 60,    // open when flapping
  resetTimeout: 4000
});

export async function encryptField(key, value, context) {
  // Keep plaintext lifetimes minimal; avoid string copies if possible
  return transit.encrypt({ key, plaintext: value, context });
}

export async function decryptField(key, ciphertext, context, { cacheable = false } = {}) {
  const ck = `${key}:${ciphertext}`;
  if (cacheable && cache.has(ck)) return cache.get(ck);

  const plain = await breaker.fire({ key, ciphertext, context });
  if (cacheable) cache.set(ck, plain);
  return plain;
}
```

**Field hygiene tips that saved us:**

* Store **derivatives** for searching/sorting (hashes, last-4, tokens). **Never** query on plaintext.
* **Decrypt only at the edge** of the response and drop the buffer immediately. If your language lets you **zeroize**, do it.
* Make “can I see this field?” a first-class authorization check, not a vibe.

---

## 4) The migration we didn’t want to postpone (or page through)

We had millions of plaintext records. The plan had two tracks:

### A) Dual-writes first (ship the write path)

Once `securitas` was live, new writes stored **both** legacy plaintext and the **encrypted** field for a short window. Reads **preferred encrypted**; fell back to plaintext if missing. This turned on the future before rewriting the past.

### B) Backfill next (rewrite the past without drama)

Workers pulled IDs in chunks, called Transit, wrote encrypted fields into shadow attributes (or a parallel collection), then **idempotent upsert** back. We rate-limited Transit, jittered retries, and punted persistent failures into a DLQ.

**Cutover playbook**

1. Flip feature flags so reads go “decrypt-first”
2. Freeze legacy plaintext writes
3. Let the grace window expire
4. Drop plaintext columns with a guarded migration step

The key to sleeping at night: **verification without logging secrets**—we compared hashes of plaintext vs decrypt(encrypt(plaintext)) on the fly.

---

## 5) Crypto-shredding semantics (how we actually “delete”)

We support two primitives:

1. **Hard shred** (no take-backs)

   * Create keys with `deletion_allowed=true`.
   * When the contract says “forget everything for Tenant-7,” we **delete** `profiles.customer.Tenant7` (or the scoped key) and keep the audit trail. All ciphertext under that key is unrecoverable.

2. **Soft shred** (forward-only)

   * Raise `min_decryption_version` so old ciphertext becomes undecryptable, then re-encrypt on access. Great for periodic retirement or data minimization without detonating an entire scope.

**Granularity tip:** If you’ll be asked to erase **per user**, push that identity into **derived context** and keep a map. Then you can retire a micro-scope without bulldozing the block.

---

## 6) The outage that forced us to grow up

We didn’t lose Vault. We lost time. A different control-plane component hiccupped, Transit latencies spiked, and suddenly **decryption sat on the hot path** of profile reads. The blast radius felt bigger than it should.

What hurt:

* Retries piled up and created a mini-thundering herd.
* Thread pools filled with “waiting on crypto.”
* Some endpoints had no “okay, mask it and move on” mode.

What we changed:

* **HA Vault** (multi-node, multi-AZ) with local **HAProxy** doing health-based routing.
* **Budgeted retries** (exponential + jitter, small caps) and **circuit breakers** that open quickly and half-open with probes.
* A **short-TTL in-process cache** for **explicitly low-sensitivity** fields (think display names), TTL ≤ 60s. **Never** cache high-sensitivity PII or secrets.
* **Bulkheads**: separate pools for crypto I/O and business I/O so one can drown without taking the other with it.
* **Purpose binding** everywhere: a decrypt without a purpose string does not pass go. We rate-limit by purpose class.
* **Degrade modes**: mask values where the UX can tolerate it; 503 where it can’t. Failing fast beats failing noisy.

---

## 7) Run it like you mean it (ops guardrails)

* **Policies**: split encrypt/decrypt; short-lived tokens for ops with MFA.
* **Metrics**: encrypt/decrypt QPS, p95/p99, error taxonomy (client vs server), cache hit ratio, key-version spread.
* **Alarms**: rising p99, decrypts from surprising call paths, encryption using non-latest versions.
* **Runbooks**: rotation, shard/key deletion drills, Transit node replacement, failover tests. Practice the scary ones.

---

## 8) What gets better, what gets trickier

**The wins**

* A stolen DB dump is boring without Transit and the right policy.
* Backups/replicas are safer by default.
* “Delete” is a **procedure with proof**, not a best-effort hope.

**The trade-offs**

* Your service **is** a decryption oracle unless you make it otherwise. Authorization and **purpose-limited decrypts** are table stakes.
* Transit latency now matters. Invest in HA and graceful fallback **before** your first incident.
* Querying encrypted fields is a paradigm shift—prepare hashes, tokens, and UX that doesn’t require plaintext to search.

---

## 9) A small, honest code slice

```js
// Example usage inside a handler
import { encryptField, decryptField } from '@org/securitas';

async function storeProfile(p) {
  const ctx = `${p.tenantId}:${p.userId}:phone`;
  const phoneEnc = await encryptField('profiles.customer.v1', p.phone, ctx);

  await db.update(p.userId, {
    phone_enc: phoneEnc,
    phone_last4: p.phone.slice(-4),
  });
}

async function readProfile(userId, viewer) {
  const rec = await db.get(userId);
  const canSee = await can(viewer, 'read.phone', userId);

  return {
    ...rec,
    phone: canSee
      ? await decryptField('profiles.customer.v1', rec.phone_enc, `${rec.tenantId}:${userId}:phone`, { cacheable: false })
      : mask(rec.phone_last4),
  };
}
```

---

## 10) Testing, drills, and audits (aka future you says thanks)

* **Property-based tests**: `decrypt(encrypt(x)) === x` for weird Unicode, long strings, edge bytes.
* **Load tests** with Transit throttled to force the breaker/caching logic to earn its keep.
* **Lifecycle audits**: prove (in a sandbox) that `deletion_allowed` keys actually die, and that raising `min_decryption_version` does what you think.
* **Red-team the oracle**: try to coerce decrypts via unexpected endpoints/purposes. Make sure logs and alerts tell on you.

---

## 11) “Why not…?” mini-FAQ

**Why not TDE (Transparent Data Encryption)?**
Great for lost disks; useless for stolen query privileges and DB snapshots. We wanted **field-level control** and **per-scope shredding**.

**Why not roll our own KMS client-side?**
Transit gives us **derived keys, versioning, audit, and policy** out of the box. Also: fewer ways to slice your foot.

**What about search over encrypted data?**
We didn’t reinvent crypto. We used **hashes/tokens/last-N** alongside ciphertext, and designed queries/UX to live with that.

---

### Closing

We didn’t set out to become key janitors. We set out to make “delete” mean something. The trick wasn’t a clever cipher; it was **moving the boundary**: encrypt **outside** the datastore, keep **keys outside** the app, and make **decrypt scarce, purposeful, and observable**. Do that, rehearse the migrations, and harden for the day Transit blips—and you’ll have both **defense in depth** and a **clean deletion story** when it matters.
