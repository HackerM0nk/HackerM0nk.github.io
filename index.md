---
layout: splash
title: "Engineering Secure Platforms: From Code to Compliance"
permalink: /
header:
  overlay_color: "#0b132b"
  overlay_filter: "0.55"
  overlay_image: "{{ '/images/R.jpeg' | relative_url }}"
excerpt: >
  Securing data, intelligence, and the fabric that connects them across modern platforms.
---

<div class="kicker">Security across code, cloud, and cognition</div>

<div class="skills-cards" aria-label="Technical skills">
  <div class="skill-card">Platform Engineering</div>
  <div class="skill-card">ML / LLM Security </div>
  <div class="skill-card">Cloud-Native Security</div>
  <div class="skill-card">Kubernetes & Containers</div>
  <div class="skill-card">Microservice Architecture</div>
  <div class="skill-card">Secure Development</div>
  <div class="skill-card">Distributed Systems</div>
  <div class="skill-card">Detection & Response</div>
  <div class="skill-card">Data Privacy</div>
  <div class="skill-card">Web & API Security</div>
  <div class="skill-card">Cryptography & Data Encryption</div>
  <div class="skill-card">Data Governance</div>
  <div class="skill-card">Threat Modeling</div>
  <div class="skill-card">Penetration Testing</div>
  <div class="skill-card">Audits & Compliance</div>
</div>

<!-- <div class="cta-row">
  <a class="btn btn--primary" href="{{ '/about/' | relative_url }}">About</a>
  <a class="btn btn--light-outline" href="{{ '/portfolio/' | relative_url }}">Projects</a>
  <a class="btn btn--light-outline" href="{{ '/year-archive/' | relative_url }}">Blog</a>
</div> -->

<style>
/* Headline polish */
.page__hero--overlay .page__title {
  font-weight: 800;
  letter-spacing: 0.2px;
}
.page__hero--overlay .page__lead {
  max-width: 980px;
  margin: 0 auto;
  opacity: 0.95;
}

/* Small top kicker */
.kicker {
  text-align: center;
  margin: 0.35rem auto 1rem auto;
  font-size: 0.95rem;
  font-weight: 600;
  letter-spacing: 0.4px;
  text-transform: uppercase;
  color: rgba(255,255,255,0.9);
}

/* Solid skill cards (sturdy, high-contrast) */
.skills-cards {
  display: grid;
  grid-template-columns: repeat(3, minmax(190px, 1fr));
  gap: 0.9rem;
  max-width: 1100px;
  margin: 1.1rem auto 1.2rem auto;
  padding: 0 0.25rem;
}
.skill-card {
  background: rgba(10, 11, 18, 0.78);
  border: 1px solid rgba(255,255,255,0.12);
  border-radius: 12px;
  color: #fff;
  padding: 0.85rem 1rem 0.85rem 2.2rem;
  font-size: 0.98rem;
  font-weight: 650;
  line-height: 1.35;
  position: relative;
  box-shadow: 0 10px 28px rgba(0,0,0,0.28);
  transition: transform 0.15s ease, box-shadow 0.15s ease, border-color 0.15s ease;
  backdrop-filter: saturate(110%) blur(2px);
  -webkit-backdrop-filter: saturate(110%) blur(2px);
}
.skill-card::before {
  content: "";
  position: absolute;
  left: 0.95rem;
  top: 50%;
  transform: translateY(-50%);
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: #7bd389; /* calm green */
  box-shadow: 0 0 0 3px rgba(123,211,137,0.22);
}
.skill-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 14px 34px rgba(0,0,0,0.32);
  border-color: rgba(255,255,255,0.2);
}

/* CTA buttons */
.cta-row {
  display: flex;
  gap: 0.7rem;
  justify-content: center;
  align-items: center;
  margin: 0.6rem 0 0.4rem 0;
}
.cta-row .btn {
  font-weight: 700;
  border-radius: 10px;
  padding: 0.6rem 1.05rem;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
}
.cta-row .btn:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 18px rgba(0,0,0,0.22);
}
.btn--light-outline {
  background: transparent;
  border: 1.5px solid rgba(255,255,255,0.75);
  color: #fff !important;
}
.btn--light-outline:hover {
  background: rgba(255,255,255,0.12);
}

/* Responsive columns */
@media (max-width: 1200px) {
  .skills-cards { grid-template-columns: repeat(3, minmax(190px, 1fr)); }
}
@media (max-width: 900px) {
  .skills-cards { grid-template-columns: repeat(2, minmax(190px, 1fr)); }
}
@media (max-width: 560px) {
  .skills-cards { grid-template-columns: 1fr; }
  .page__hero--overlay .page__title { font-size: 2rem; }
  .page__hero--overlay .page__lead { font-size: 1.05rem; }
}
</style>
