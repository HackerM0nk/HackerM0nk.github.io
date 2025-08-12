---
layout: single
title: "Eliminating Tech Debt: Automated Dependency Updates & Code Refactoring"
date: 2025-08-15
permalink: /blog/gitlab-renovate-openrewrite/
categories: [security, devsecops, automation]
tags: [gitlab, renovate, openrewrite, dependency-management]
excerpt: "Renovate and OpenRewrite"
toc: true
toc_sticky: true
author_profile: false
read_time: true
classes: [wide, xl]
---

Keeping base images and application dependencies fresh is a never-ending chore.  
This post shows how to wire up **Renovate** for quarterly dependency updates (especially Dockerfiles) on GitLab, where **OpenRewrite** fits for Java code changes.

---

## Why Automate? (Golden Images, Security, SCA Noise)

- **Golden base images** drift, accumulating CVEs over time.
- Manually bumping tags across many repos is painful and inconsistent.
- Quarterly, curated updates reduce alert fatigue while keeping compliance intact.

---

## Quickstart: Self-Hosted Renovate on GitLab (Quarterly Cadence)

**Repo structure for a `renovate-bot` project:**

```plaintext
.
├── .gitlab-ci.yml
├── renovate.json5
└── templates/
    └── renovate.gitlab-ci.yml
```
## `renovate.json5`

```json5
{
  "platform": "gitlab",
  "endpoint": "https://gitlab.com/api/v4",
  "autodiscover": true,
  "extends": ["config:base"],
  "docker": { "enabled": true },
  "packageRules": [
    {
      "managers": ["dockerfile"],
      "groupName": "Base image updates",
      "schedule": ["on the first day of the month"],
      "automerge": false
    },
    {
      "matchPackageNames": ["renovate/renovate"],
      "matchUpdateTypes": ["minor", "patch"],
      "automerge": true,
      "automergeType": "branch"
    }
  ],
  "onboarding": true,
  "requireConfig": "optional"
}
```

## Private registries? Add hostRules
```json5
"hostRules": [
  {
    "hostType": "docker",
    "matchHost": "registry.example.com",
    "username": "CI_DOCKER_USER",
    "password": "CI_DOCKER_PASS"
  }
] 
```

## `.gitlab-ci.yml`
```yaml
include:
  - 'templates/renovate.gitlab-ci.yml'

stages: [renovate]

variables:
  RENOVATE_CONFIG_FILE: 'renovate.json5'

renovate:
  stage: renovate
  image: renovate/renovate:latest
  script: [ "renovate" ]
  rules:
    - if: '$CI_PIPELINE_SOURCE == "schedule"'
      when: always
    - when: never
```
## `templates/renovate.gitlab-ci.yml`
```yaml
variables:
  GIT_DEPTH: 0

before_script:
  - echo "Starting Renovate"

renovate:
  script:
    - npx renovate
```
## CI/CD Variables
RENOVATE_TOKEN — GitLab PAT (scopes: api, read_user, write_repository)

Optional: GITHUB_COM_TOKEN — for GitHub package lookups

Schedule It Quarterly
In GitLab: CI/CD → Schedules → New schedule

```plaintext
Description: Quarterly Renovate Run
Cron: 0 2 1 1,4,7,10 *
Target branch: main
Timezone: match your ops window
```

## OpenRewrite vs Renovate — Why Use Both?

| Aspect                    | Renovate                                                                    | OpenRewrite                                     |
|---------------------------|-----------------------------------------------------------------------------|-------------------------------------------------|
| Primary job               | Bump dependency versions (Maven, npm, Docker tags, etc.)                    | Refactor source code for API changes            |
| Output                    | MRs updating version declarations                                           | MRs with code changes                           |
| Scope                     | Many ecosystems (npm, pip, Maven/Gradle, Dockerfile, Helm, Terraform, etc.) | Strong for Java/JVM; also YAML/XML/props        |
| Breaking change handling  | No (build may break)                                                        | Yes (recipes handle API migration)              |

### Workflow example

1. Renovate raises an MR to move `spring-boot` 2.x → 3.x.  
2. OpenRewrite applies Java refactors (Jakarta namespace, etc.).  
3. CI tests run; reviewers merge when green.
