---
layout: page
title: "Technical Blog"
description: "Deep dives into software engineering, security, AI/ML, and distributed systems"
permalink: /blog/
---

<div class="blog-container" style="max-width: 800px; margin: 0 auto; padding: 1rem 1rem 2rem 1rem;">
  <!-- Featured Post -->
  {% assign featured_post = site.posts.first %}
  {% if featured_post %}
  <div class="featured-post" style="margin-bottom: 4rem; padding-bottom: 2rem; border-bottom: 1px solid #eaecef;">
    <h2 style="font-size: 1.25rem; margin-bottom: 1.5rem; color: #6c757d; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">
      Featured Post
    </h2>
    
    <article style="margin-bottom: 1.5rem;">
      {% if featured_post.header.overlay_image %}
      <div style="margin-bottom: 1.5rem; border-radius: 6px; overflow: hidden;">
        <img src="{{ featured_post.header.overlay_image | relative_url }}" alt="{{ featured_post.title }}" style="width: 100%; height: auto; display: block;">
      </div>
      {% endif %}
      
      <div>
        <div style="margin-bottom: 0.75rem; color: #6c757d; font-size: 0.9rem;">
          <span style="margin-right: 1rem;">
            <i class="far fa-calendar-alt"></i>
            {{ featured_post.date | date: "%B %d, %Y" }}
          </span>
          {% if featured_post.read_time %}
          <span>
            <i class="far fa-clock"></i>
            {{ featured_post.read_time }}
          </span>
          {% endif %}
        </div>
        
        <h3 style="font-size: 1.75rem; margin: 0 0 1rem 0; line-height: 1.3; font-weight: 700;">
          <a href="{{ featured_post.url | relative_url }}" style="color: #2c3e50; text-decoration: none;">
            {{ featured_post.title }}
          </a>
        </h3>
        
        <p style="color: #4a5568; line-height: 1.7; margin-bottom: 1.5rem; font-size: 1.1rem;">
          {{ featured_post.excerpt | strip_html | truncate: 300 }}
        </p>
        
        <a href="{{ featured_post.url | relative_url }}" style="color: #4b6cb7; text-decoration: none; font-weight: 500; display: inline-flex; align-items: center;">
          Continue reading <i class="fas fa-arrow-right" style="margin-left: 0.5rem; font-size: 0.8rem;"></i>
        </a>
      </div>
    </article>
  </div>
  {% endif %}

  <!-- Recent Posts -->
  <div class="recent-posts" style="margin-top: 4rem;">
    <h2 style="font-size: 1.25rem; margin: 0 0 2rem; padding-bottom: 1rem; border-bottom: 1px solid #eaecef; color: #6c757d; font-weight: 600; text-transform: uppercase; letter-spacing: 0.1em;">
      Latest Articles
    </h2>
    
    <div style="margin-bottom: 4rem;">
      {% for post in site.posts offset:1 limit:6 %}
      <article style="margin-bottom: 3rem; padding-bottom: 2rem; border-bottom: 1px solid #f0f0f0;">
        {% if post.header.overlay_image %}
        <div style="margin-bottom: 1.5rem; border-radius: 6px; overflow: hidden;">
          <img src="{{ post.header.overlay_image | relative_url }}" alt="{{ post.title }}" style="width: 100%; height: auto; display: block;">
        </div>
        {% endif %}
        
        <div>
          <div style="margin-bottom: 0.5rem; color: #6c757d; font-size: 0.9rem;">
            <span style="margin-right: 1rem;">
              <i class="far fa-calendar-alt"></i>
              {{ post.date | date: "%B %d, %Y" }}
            </span>
            {% if post.read_time %}
            <span>
              <i class="far fa-clock"></i>
              {{ post.read_time }}
            </span>
            {% endif %}
          </div>
          
          <h3 style="font-size: 1.5rem; margin: 0 0 0.75rem 0; line-height: 1.3; font-weight: 700;">
            <a href="{{ post.url | relative_url }}" style="color: #2c3e50; text-decoration: none;">
              {{ post.title }}
            </a>
          </h3>
          
          <p style="color: #4a5568; line-height: 1.7; margin-bottom: 1.25rem; font-size: 1.05rem;">
            {{ post.excerpt | strip_html | truncate: 250 }}
          </p>
          
          <a href="{{ post.url | relative_url }}" style="color: #4b6cb7; text-decoration: none; font-weight: 500; display: inline-flex; align-items: center;">
            Read more <i class="fas fa-arrow-right" style="margin-left: 0.5rem; font-size: 0.8rem;"></i>
          </a>
        </div>
      </article>
      {% endfor %}
    </div>
    
    <div style="text-align: center; margin: 3rem 0 2rem;">
      <a href="{{ '/posts/' | relative_url }}" style="display: inline-block; color: #4b6cb7; text-decoration: none; font-weight: 500; padding: 0.6rem 1.4rem; border: 1px solid #4b6cb7; border-radius: 4px; transition: all 0.2s ease;">
        View All Posts
      </a>
    </div>
  </div>
</div>

<style>
  a {
    transition: color 0.2s ease;
  }
  
  a:hover {
    color: #3a56a8;
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    .blog-container {
      padding: 1rem;
    }
    
    h1 {
      font-size: 2rem !important;
    }
    
    h3 {
      font-size: 1.4rem !important;
    }
  }
</style>

## Featured Topics

<div class="grid cols-2">
  <div class="card">
    <div class="inner">
      <h3>Platform Security</h3>
      <p class="muted">Enterprise-grade security patterns, BYOK implementations, zero-trust architectures, and compliance frameworks.</p>
      <ul class="clean">
        <li>Zero Trust</li>
        <li>BYOK</li>
        <li>Compliance</li>
      </ul>
    </div>
  </div>

  <div class="card">
    <div class="inner">
      <h3>AI/ML Security</h3>
      <p class="muted">ML pipeline security, model governance, adversarial attack detection, and AI safety controls in production.</p>
      <ul class="clean">
        <li>ML Security</li>
        <li>Model Governance</li>
        <li>AI Safety</li>
      </ul>
    </div>
  </div>

  <div class="card">
    <div class="inner">
      <h3>DevSecOps</h3>
      <p class="muted">Security automation, CI/CD hardening, policy as code, and developer-friendly security tooling.</p>
      <ul class="clean">
        <li>CI/CD Security</li>
        <li>Policy as Code</li>
        <li>Automation</li>
      </ul>
    </div>
  </div>

  <div class="card">
    <div class="inner">
      <h3>Distributed Systems</h3>
      <p class="muted">Microservices security, service mesh, event-driven architecture, and runtime monitoring patterns.</p>
      <ul class="clean">
        <li>Microservices</li>
        <li>Service Mesh</li>
        <li>Runtime Security</li>
      </ul>
    </div>
  </div>
</div>

</div> <!-- Close blog-container -->