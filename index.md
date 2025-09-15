---
layout: modern
title: ""
permalink: /
---

<!-- HERO -->
<section class="hero-single">
  <div class="hero-intro">
    <span class="greeting">HELLO 👋</span>
    <h1 class="h1">I'm a Software Security Engineer focused on securing <em>Platforms</em> and <em> Products</em></h1>
    <p class="lead">Security isn't a side quest—it's part of how we build. I lean on code and IaC as the ground truth, use sensible defaults, and track a few meaningful signals. The aim: make the right thing easy and drift impossible to miss.</p>
    <div class="cta">
      <a class="btn" href="/about/">About</a>
      <a class="btn" href="#work">Technical work</a>
      <a class="btn" href="#contact">Contact</a>
    </div>
  </div>
</section>

<!-- WHAT I DO -->
<section>
  <h2>What I Do</h2>
  <div class="executive-summary">
    <p style="font-size: 1.1rem; line-height: 1.7; color: var(--sub); margin: 0;">I'm a software security engineer who builds security into how cloud-native systems are designed, built, shipped, and run. My bias: security should feel like part of engineering—not a separate lane. I treat application code and IaC as the source of truth, set sane defaults, and measure the few signals that actually show whether we're safe and compliant. The goal is simple: make the secure path the easy path, and make drift obvious.</p>
  </div>
</section>

<!-- SECURITY APPROACH -->
<section class="section-accent">
  <div class="wrap">
    <div style="text-align: center; margin-bottom: 48px;">
      <h2>How I approach security</h2>
      <p class="lead" style="max-width: 800px; margin: 16px auto 0; font-size: 1.2rem; text-align: center;">
        Security problems are engineering problems. Build it into the system from the start, measure what matters, and make the right choices obvious.
      </p>
    </div>

    <div class="grid" style="grid-template-columns: 1fr; gap: 24px; max-width: 900px;">
      <div class="card">
        <div class="inner">
          <h3 style="display: flex; align-items: center; gap: 16px;">
            <span style="display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; background: var(--brand); color: white; border-radius: 50%; font-size: 0.9rem; font-weight: 600;">1</span>
            Code as Source of Truth
          </h3>
          <p>Your application code and infrastructure definitions are the only reliable source of what's actually running. Configuration management tools lie, documentation goes stale, but the code doesn't.</p>
        </div>
      </div>

      <div class="card">
        <div class="inner">
          <h3 style="display: flex; align-items: center; gap: 16px;">
            <span style="display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; background: var(--brand); color: white; border-radius: 50%; font-size: 0.9rem; font-weight: 600;">2</span>
            Secure Paved Paths
          </h3>
          <p>If the secure approach is harder than the insecure one, people will take shortcuts. Build security into the tools and workflows engineers already use every day.</p>
        </div>
      </div>

      <div class="card">
        <div class="inner">
          <h3 style="display: flex; align-items: center; gap: 16px;">
            <span style="display: inline-flex; align-items: center; justify-content: center; width: 32px; height: 32px; background: var(--brand); color: white; border-radius: 50%; font-size: 0.9rem; font-weight: 600;">3</span>
            Build Systems with Runtime Security
          </h3>
          <p>Things will break and attacks will happen. Design systems that fail safely, detect problems quickly, and give you the data you need to understand what went wrong.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- EXECUTIVE SUMMARY -->
<section>
  <h2>What I Do</h2>
  <div class="executive-summary">
    <p style="font-size: 1.2rem; line-height: 1.7; color: var(--sub); margin: 0; text-align: center;">Security architecture for distributed systems, with emphasis on design patterns that scale with engineering velocity. Focus on measurable controls, infrastructure as code, and operational practices that make security failures observable and correctable.</p>
  </div>
</section>

<!-- TRUST STRIP -->
<!-- <section aria-label="experience">
  <div class="trust-strip">
    <div style="display:flex; gap:32px; flex-wrap:wrap; align-items:center; justify-content:center">
      <span class="mono" style="color:var(--muted); font-weight: 600;">Experience →</span>
      <span class="badge">Enterprise Security</span>
      <span class="badge">Multi-Cloud Platforms</span>
      <span class="badge">Security Leadership</span>
      <span class="badge">DevSecOps Automation</span>
    </div>
  </div>
</section> -->

<!-- CORE COMPETENCIES -->
<section>
  <h2>Core Competencies</h2>
  <div class="competency-list">
    <div class="competency-item">
      <h3>Design & Threat Modeling</h3>
      <p>Map data flows early, call out material risks, choose controls that match the feature. Encode decisions in CI/CD (required checks, signatures, policies) so "approved" == "passing."</p>
    </div>

    <div class="competency-item">
      <h3>Code Security</h3>
      <p>Keep secrets out of source; run Gitleaks/secret rotation, SAST where it pays off, SCA with license policy; container image scanning; protect against dependency confusion/typosquatting via scoped registries, verified publishers, and pinning.</p>
    </div>

    <div class="competency-item">
      <h3>Delivery & Supply Chain</h3>
      <p>Reproducible builds, artifact signing/attestations, minimal images, SBOMs, and policy gates on merge and deploy. Clear, repeatable promotion between environments.</p>
    </div>

    <div class="competency-item">
      <h3>IaC & Cloud Posture</h3>
      <p>Terraform/Helm as truth, policy-as-code guardrails, drift detection, and CNAPP coverage that turns findings into issues—not dashboards.</p>
    </div>

    <div class="competency-item">
      <h3>Distributed Systems</h3>
      <p>Service identity and scoped communication (mTLS/mesh), network segmentation, timeouts/backpressure, idempotency, multi-tenant defaults, and observability that traces calls across the platform.</p>
    </div>
  </div>
</section>

<!-- TECH STACK -->
<section>
  <h2>Tech Stack</h2>
  <div class="tech-grid">
    <div class="tech-category">
      <h3>Languages</h3>
      <p>C++, Python, Go, Node.js</p>
    </div>
    <div class="tech-category">
      <h3>Cloud</h3>
      <p>AWS, Azure, GCP</p>
    </div>
    <div class="tech-category">
      <h3>Orchestration</h3>
      <p>Containers & Kubernetes (EKS/AKS/GKE)</p>
    </div>
    <div class="tech-category">
      <h3>Pipelines & IaC</h3>
      <p>GitHub Actions, GitLab CI, Terraform, Helm, Ansible</p>
    </div>
    <div class="tech-category">
      <h3>Data & Messaging</h3>
      <p>PostgreSQL, Redis, MongoDB, Kafka</p>
    </div>
    <div class="tech-category">
      <h3>Observability</h3>
      <p>Prometheus, Grafana, OpenTelemetry</p>
    </div>
    <div class="tech-category">
      <h3>Security (practical)</h3>
      <p>Secrets management, image signing & SBOMs, policy-as-code in CI, least-privilege by default</p>
    </div>
    <div class="tech-category">
      <h3>Systems</h3>
      <p>Linux, eBPF, debugging in prod</p>
    </div>
    <div class="tech-category">
      <h3>MLOps</h3>
      <p>Python, PyTorch, LLMs, Math</p>
    </div>
  </div>
</section>

<!-- SELECTED WORK -->
<section id="work">
  <h2>Technical work</h2>
  <div class="grid cols-3">
    <article class="card">
      <div class="inner">
        <h3>Multi-Tenant BYOK Architecture</h3>
        <p class="muted">Customer-scoped key management with envelope encryption, automated rotation, and tenant isolation across 25+ cloud accounts.</p>
        <ul class="clean">
          <li>AWS KMS</li><li>Envelope Encryption</li><li>Terraform</li>
        </ul>
      </div>
    </article>
    <article class="card">
      <div class="inner">
        <h3>Crypto-Shredding Pipeline</h3>
        <p class="muted">RTBF-compliant data deletion with ephemeral keys and verifiable destruction for millions of user records.</p>
        <ul class="clean"><li>Kubernetes</li><li>Vault Transit</li><li>Event-driven</li></ul>
      </div>
    </article>
    <article class="card">
      <div class="inner">
        <h3>eBPF Runtime Security</h3>
        <p class="muted">Production syscall monitoring with SIEM integration for real-time threat detection and incident response.</p>
        <ul class="clean"><li>eBPF</li><li>Go</li><li>SIEM Integration</li></ul>
      </div>
    </article>
    <article class="card">
      <div class="inner">
        <h3>DevSecOps Automation</h3>
        <p class="muted">CI/CD security pipeline reducing build times 45→23 mins while increasing automated security coverage.</p>
        <ul class="clean"><li>GitLab CI</li><li>SAST/SCA</li><li>Policy as Code</li></ul>
      </div>
    </article>
    <article class="card">
      <div class="inner">
        <h3>Zero-Trust Architecture</h3>
        <p class="muted">Multi-cloud network security with service mesh, identity verification, and microsegmentation controls.</p>
        <ul class="clean"><li>Istio</li><li>mTLS</li><li>AWS/Azure/GCP</li></ul>
      </div>
    </article>
    <article class="card">
      <div class="inner">
        <h3>Security Posture Management</h3>
        <p class="muted">Automated compliance monitoring, drift detection, and remediation workflows for enterprise environments.</p>
        <ul class="clean"><li>CloudFormation</li><li>Config Rules</li><li>Lambda</li></ul>
      </div>
    </article>
  </div>
</section>

<!-- LATEST FROM BLOG -->
<section id="writing">
  <h2>Latest from blog</h2>
  <div class="grid cols-2">
    <article class="card">
      <div class="inner">
        <h3>Designing Security into Distributed Systems</h3>
        <p class="muted">A comprehensive guide to threat modeling, trust boundaries, and implementing zero-trust architectures in cloud-native environments.</p>
        <a class="btn" href="/blog/distributed-systems-security/">Read →</a>
      </div>
    </article>
    <article class="card">
      <div class="inner">
        <h3>BYOK and Crypto-Shredding Architecture</h3>
        <p class="muted">Deep dive into customer-managed encryption keys, data lifecycle controls, and verifiable deletion patterns.</p>
        <a class="btn" href="/blog/byok-crypto-shredding-architecture/">Read →</a>
      </div>
    </article>
    <article class="card">
      <div class="inner">
        <h3>eBPF for Security Use Cases</h3>
        <p class="muted">Practical applications of eBPF for runtime security monitoring, observability, and threat detection.</p>
        <a class="btn" href="/blog/ebpf-security-use-cases/">Read →</a>
      </div>
    </article>
    <article class="card">
      <div class="inner">
        <h3>Secure SDLC by Design</h3>
        <p class="muted">Building security into development workflows with automated policy enforcement and developer-friendly tooling.</p>
        <a class="btn" href="/blog/secure-sdlc-by-design/">Read →</a>
      </div>
    </article>
  </div>
  <div style="text-align:center; margin-top:24px">
    <a class="btn" href="/blog/">View all posts →</a>
  </div>
</section>

<!-- PORTFOLIO & PROJECTS -->
<section>
  <h2>Portfolio & showcase</h2>
  <div class="card">
    <div class="inner">
      <p class="muted">Architecture diagrams, implementation details, and technical case studies from distributed systems security work.</p>
      <div style="margin-top:16px">
        <a class="btn primary" href="/portfolio/">Explore Portfolio</a>
      </div>
    </div>
  </div>
</section>

<!-- PUBLICATIONS (Hidden by default - uncomment to enable) -->
<!--
<section id="publications">
  <h2>Publications & research</h2>
  <div class="grid cols-2">
    <article class="card">
      <div class="inner">
        <h3>Security Architecture Patterns for Cloud-Native Applications</h3>
        <p class="muted">Published research on implementing zero-trust architectures in distributed systems and microservices environments.</p>
        <ul class="clean">
          <li>Peer-reviewed</li><li>Conference Paper</li><li>2024</li>
        </ul>
        <a class="btn" href="/publications/security-architecture-patterns/">Read Paper →</a>
      </div>
    </article>
    <article class="card">
      <div class="inner">
        <h3>eBPF-Based Runtime Security Monitoring</h3>
        <p class="muted">Technical paper on leveraging eBPF for real-time security monitoring in containerized environments.</p>
        <ul class="clean">
          <li>Journal Article</li><li>Technical Report</li><li>2023</li>
        </ul>
        <a class="btn" href="/publications/ebpf-runtime-security/">Read Paper →</a>
      </div>
    </article>
  </div>
  <div style="text-align:center; margin-top:24px">
    <a class="btn" href="/publications/">View all publications →</a>
  </div>
</section>
-->

<!-- BOOKS & READING -->
<section id="books">
  <h2>Books & continuous learning</h2>
  <div class="card">
    <div class="inner">
      <p class="muted">Technical references, security research papers, and systems design resources. Focus on distributed systems, security architecture, and platform engineering.</p>
      <div style="margin-top:16px">
        <a class="btn" href="/books/">Browse Library</a>
      </div>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section id="contact">
  <h2>Get in touch</h2>
  <div class="card">
    <div class="inner">
      <p class="muted">Email <a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a> or connect on <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}">LinkedIn</a> for technical discussions.</p>
      <p class="muted" style="margin-top:12px">Interested in platform security, infrastructure architecture, and distributed systems security roles.</p>
      <div style="margin-top:16px">
        <a class="btn primary" href="mailto:{{ site.author.email }}">Send Email</a>
        <a class="btn" href="https://www.linkedin.com/in/{{ site.author.linkedin }}">LinkedIn</a>
      </div>
    </div>
  </div>
</section>