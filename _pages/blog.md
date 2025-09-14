---
layout: page
title: "Technical Blog"
description: "Deep dives into software engineering, security, AI/ML, and distributed systems"
permalink: /blog/
---

<!-- Blog Header -->
<header class="blog-header" style="background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); padding: 4rem 2rem; margin-bottom: 3rem; border-radius: 0 0 15px 15px; color: white;">
  <div class="wrapper" style="max-width: 1200px; margin: 0 auto;">
    <h1 class="page__title" style="color: white; margin-bottom: 1rem; font-size: 2.5rem; font-weight: 700;">
      {{ page.title | default: "Blog" }}
    </h1>
    <p class="page__subtitle" style="font-size: 1.25rem; opacity: 0.9; max-width: 800px; margin: 0 auto;">
      {% if page.description %}{{ page.description }}{% else %}Technical insights on software engineering, security, AI/ML, and distributed systems{% endif %}
    </p>
  </div>
</header>

<div class="blog-container" style="max-width: 1200px; margin: 0 auto; padding: 0 2rem;">
  <!-- Featured Post -->
  {% assign featured_post = site.posts.first %}
  {% if featured_post %}
  <div class="featured-post" style="margin-bottom: 4rem; border-radius: 12px; overflow: hidden; box-shadow: 0 10px 30px rgba(0,0,0,0.1); transition: transform 0.3s ease, box-shadow 0.3s ease;">
    <div class="featured-post__image" style="height: 400px; overflow: hidden;">
      {% if featured_post.header.overlay_image %}
        <img src="{{ featured_post.header.overlay_image | relative_url }}" alt="{{ featured_post.title }}" style="width: 100%; height: 100%; object-fit: cover;">
      {% else %}
        <div style="background: linear-gradient(45deg, #4b6cb7, #182848); height: 100%; display: flex; align-items: center; justify-content: center; color: white; font-size: 1.5rem;">
          {{ featured_post.title }}
        </div>
      {% endif %}
    </div>
    <div class="featured-post__content" style="padding: 2rem; background: white;">
      <div class="post-meta" style="margin-bottom: 1rem; display: flex; align-items: center; color: #6c757d; font-size: 0.9rem;">
        <span class="post-date" style="margin-right: 1rem;">
          <i class="far fa-calendar-alt" style="margin-right: 0.3rem;"></i>
          {{ featured_post.date | date: "%B %d, %Y" }}
        </span>
        {% if featured_post.read_time %}
        <span class="read-time">
          <i class="far fa-clock" style="margin-right: 0.3rem;"></i>
          {{ featured_post.read_time }}
        </span>
        {% endif %}
      </div>
      <h2 style="font-size: 2rem; margin-top: 0; margin-bottom: 1rem;">
        <a href="{{ featured_post.url | relative_url }}" style="color: #2c3e50; text-decoration: none; transition: color 0.3s ease;">
          {{ featured_post.title }}
        </a>
      </h2>
      <p class="post-excerpt" style="color: #4a5568; line-height: 1.7; margin-bottom: 1.5rem;">
        {{ featured_post.excerpt | strip_html | truncate: 300 }}
      </p>
      <a href="{{ featured_post.url | relative_url }}" class="read-more" style="display: inline-flex; align-items: center; color: #4b6cb7; font-weight: 600; text-decoration: none; transition: all 0.3s ease;">
        Read More <i class="fas fa-arrow-right" style="margin-left: 0.5rem; transition: transform 0.3s ease;"></i>
      </a>
      {% if featured_post.tags %}
      <div class="post-tags" style="margin-top: 1.5rem; display: flex; flex-wrap: wrap; gap: 0.5rem;">
        {% for tag in featured_post.tags limit:3 %}
          <span class="tag" style="background: #f0f4f8; color: #4b6cb7; padding: 0.25rem 0.75rem; border-radius: 50px; font-size: 0.8rem; font-weight: 500;">
            {{ tag }}
          </span>
        {% endfor %}
      </div>
      {% endif %}
    </div>
  </div>
  {% endif %}

  <!-- Blog Posts Grid -->
  <h2 style="font-size: 1.75rem; margin: 3rem 0 2rem; padding-bottom: 1rem; border-bottom: 2px solid #f0f4f8;">
    Latest Articles
  </h2>
  
  <div class="post-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 2rem; margin-bottom: 4rem;">
    {% for post in site.posts offset:1 limit:6 %}
    <article class="post-card" style="background: white; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.05); transition: transform 0.3s ease, box-shadow 0.3s ease; height: 100%; display: flex; flex-direction: column;">
      {% if post.header.overlay_image %}
      <div class="post-card__image" style="height: 180px; overflow: hidden;">
        <img src="{{ post.header.overlay_image | relative_url }}" alt="{{ post.title }}" style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease;">
      </div>
      {% endif %}
      <div class="post-card__content" style="padding: 1.5rem; flex-grow: 1; display: flex; flex-direction: column;">
        <div class="post-meta" style="margin-bottom: 0.75rem; color: #6c757d; font-size: 0.85rem;">
          <span class="post-date">
            <i class="far fa-calendar-alt" style="margin-right: 0.3rem;"></i>
            {{ post.date | date: "%b %d, %Y" }}
          </span>
        </div>
        <h3 style="font-size: 1.25rem; margin: 0 0 1rem 0; line-height: 1.4;">
          <a href="{{ post.url | relative_url }}" style="color: #2c3e50; text-decoration: none; transition: color 0.3s ease;">
            {{ post.title }}
          </a>
        </h3>
        <p class="post-excerpt" style="color: #4a5568; line-height: 1.6; margin-bottom: 1.25rem; font-size: 0.95rem; flex-grow: 1;">
          {{ post.excerpt | strip_html | truncate: 120 }}
        </p>
        <div style="margin-top: auto;">
          <a href="{{ post.url | relative_url }}" class="read-more" style="display: inline-flex; align-items: center; color: #4b6cb7; font-size: 0.9rem; font-weight: 600; text-decoration: none; transition: all 0.3s ease;">
            Read More <i class="fas fa-arrow-right" style="margin-left: 0.5rem; font-size: 0.8rem; transition: transform 0.3s ease;"></i>
          </a>
        </div>
        {% if post.tags %}
        <div class="post-tags" style="margin-top: 1rem; display: flex; flex-wrap: wrap; gap: 0.5rem;">
          {% for tag in post.tags limit:2 %}
            <span class="tag" style="background: #f0f4f8; color: #4b6cb7; padding: 0.2rem 0.6rem; border-radius: 50px; font-size: 0.75rem; font-weight: 500;">
              {{ tag }}
            </span>
          {% endfor %}
        </div>
        {% endif %}
      </div>
    </article>
    {% endfor %}
  </div>

  <!-- View All Posts Button -->
  <div class="view-all-container" style="text-align: center; margin: 3rem 0;">
    <a href="{{ '/posts/' | relative_url }}" class="btn btn--primary" style="display: inline-flex; align-items: center; background: #4b6cb7; color: white; padding: 0.8rem 2rem; border-radius: 50px; text-decoration: none; font-weight: 600; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(75, 108, 183, 0.3);">
      View All Posts <i class="fas fa-arrow-right" style="margin-left: 0.5rem;"></i>
    </a>
  </div>
</div>

<!-- Custom CSS for hover effects -->
<style>
  .featured-post:hover {
    transform: translateY(-5px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.15) !important;
  }
  
  .post-card {
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .post-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1) !important;
  }
  
  .post-card:hover .post-card__image img {
    transform: scale(1.05);
  }
  
  .read-more:hover {
    color: #3a56a8 !important;
  }
  
  .read-more:hover i {
    transform: translateX(5px);
  }
  
  .btn--primary:hover {
    background: #3a56a8 !important;
    transform: translateY(-2px);
    box-shadow: 0 6px 20px rgba(75, 108, 183, 0.4) !important;
  }
  
  @media (max-width: 768px) {
    .post-grid {
      grid-template-columns: 1fr !important;
    }
    
    .featured-post__image {
      height: 250px !important;
    }
    
    .blog-header {
      padding: 2rem 1rem !important;
      text-align: center;
    }
    
    .page__title {
      font-size: 2rem !important;
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