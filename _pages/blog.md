---
layout: page
title: "Technical Blog"
description: "Security engineering insights and distributed systems deep dives"
permalink: /blog/
---

<!-- Hero Section -->
<div class="blog-hero">
  <div class="blog-hero-content">
    <span class="pill mono">Technical Writing • Security Research • Systems Design</span>
    <h1 class="blog-title">Security Engineering <em>in Practice</em></h1>
    <p class="blog-subtitle">Deep technical content on platform security, distributed systems, and real-world security engineering patterns.</p>
  </div>
</div>

<!-- Featured Post -->
{% assign featured_post = site.posts.first %}
{% if featured_post %}
<section class="featured-section">
  <div class="section-header">
    <h2>Featured Article</h2>
    <p class="muted">Latest technical deep dive</p>
  </div>

  <article class="featured-post">
    {% if featured_post.header.overlay_image %}
    <div class="post-image">
      <img src="{{ featured_post.header.overlay_image | relative_url }}" alt="{{ featured_post.title }}">
    </div>
    {% endif %}

    <div class="post-content">
      <div class="post-meta">
        <span class="date">{{ featured_post.date | date: "%B %d, %Y" }}</span>
        {% if featured_post.read_time %}
        <span class="read-time">{{ featured_post.read_time }}</span>
        {% endif %}
        {% if featured_post.categories %}
        <span class="category">{{ featured_post.categories.first | capitalize }}</span>
        {% endif %}
      </div>

      <h3 class="post-title">
        <a href="{{ featured_post.url | relative_url }}">{{ featured_post.title }}</a>
      </h3>

      <p class="post-excerpt">{{ featured_post.excerpt | strip_html | truncate: 280 }}</p>

      <a href="{{ featured_post.url | relative_url }}" class="read-more">
        Continue reading →
      </a>
    </div>
  </article>
</section>
{% endif %}

<!-- Recent Posts -->
<section class="recent-posts">
  <div class="section-header">
    <h2>Latest Articles</h2>
    <p class="muted">Recent technical content and security research</p>
  </div>

  <div class="posts-grid">
    {% for post in site.posts offset:1 limit:8 %}
    <article class="post-card">
      {% if post.header.overlay_image %}
      <div class="card-image">
        <img src="{{ post.header.overlay_image | relative_url }}" alt="{{ post.title }}">
      </div>
      {% endif %}

      <div class="card-content">
        <div class="post-meta">
          <span class="date">{{ post.date | date: "%b %d, %Y" }}</span>
          {% if post.categories %}
          <span class="category">{{ post.categories.first | capitalize }}</span>
          {% endif %}
        </div>

        <h3 class="card-title">
          <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
        </h3>

        <p class="card-excerpt">{{ post.excerpt | strip_html | truncate: 150 }}</p>

        <a href="{{ post.url | relative_url }}" class="card-link">Read more →</a>
      </div>
    </article>
    {% endfor %}
  </div>

  <div class="view-all">
    <a href="{{ '/posts/' | relative_url }}" class="btn secondary">View All Posts</a>
  </div>
</section>

<!-- Technical Topics -->
<section class="topics-section">
  <div class="section-header">
    <h2>Technical Focus Areas</h2>
    <p class="muted">Core domains and specializations</p>
  </div>

  <div class="topics-grid">
    <div class="topic-card">
      <div class="topic-icon">🔐</div>
      <h3>Platform Security</h3>
      <p>Zero-trust architectures, BYOK implementations, tenant isolation, and enterprise security patterns.</p>
      <div class="topic-tags">
        <span class="tag">Zero Trust</span>
        <span class="tag">BYOK</span>
        <span class="tag">Compliance</span>
      </div>
    </div>

    <div class="topic-card">
      <div class="topic-icon">🤖</div>
      <h3>AI/ML Security</h3>
      <p>ML pipeline security, model governance, adversarial defense, and AI safety in production systems.</p>
      <div class="topic-tags">
        <span class="tag">ML Security</span>
        <span class="tag">Model Governance</span>
        <span class="tag">AI Safety</span>
      </div>
    </div>

    <div class="topic-card">
      <div class="topic-icon">⚙️</div>
      <h3>DevSecOps</h3>
      <p>Security automation, CI/CD hardening, policy as code, and developer-centric security tooling.</p>
      <div class="topic-tags">
        <span class="tag">CI/CD Security</span>
        <span class="tag">Policy as Code</span>
        <span class="tag">Automation</span>
      </div>
    </div>

    <div class="topic-card">
      <div class="topic-icon">🌐</div>
      <h3>Distributed Systems</h3>
      <p>Microservices security, service mesh, event-driven architectures, and runtime monitoring.</p>
      <div class="topic-tags">
        <span class="tag">Microservices</span>
        <span class="tag">Service Mesh</span>
        <span class="tag">Runtime Security</span>
      </div>
    </div>
  </div>
</section>

<style>
/* Blog Hero */
.blog-hero {
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 4rem 0;
  margin-bottom: 4rem;
  text-align: center;
}

.blog-hero-content {
  max-width: 800px;
  margin: 0 auto;
  padding: 0 2rem;
}

.blog-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin: 1rem 0;
  line-height: 1.2;
}

.blog-title em {
  color: #a8b3f0;
  font-style: normal;
}

.blog-subtitle {
  font-size: 1.25rem;
  opacity: 0.9;
  margin: 0;
  line-height: 1.6;
}

/* Section Headers */
.section-header {
  text-align: center;
  margin-bottom: 3rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.section-header .muted {
  font-size: 1.1rem;
  color: #6c757d;
}

/* Featured Section */
.featured-section {
  margin-bottom: 5rem;
}

.featured-post {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  background: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.08);
  max-width: 1200px;
  margin: 0 auto;
}

.post-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  min-height: 300px;
}

.post-content {
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.post-meta {
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;
  font-size: 0.9rem;
  color: #6c757d;
}

.post-meta .category {
  background: #e3f2fd;
  color: #1976d2;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-weight: 500;
}

.post-title {
  font-size: 2rem;
  font-weight: 700;
  margin: 0 0 1rem 0;
  line-height: 1.3;
}

.post-title a {
  color: #2c3e50;
  text-decoration: none;
}

.post-excerpt {
  color: #4a5568;
  line-height: 1.7;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
}

.read-more {
  color: #667eea;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  font-size: 1.1rem;
}

/* Recent Posts */
.recent-posts {
  margin-bottom: 5rem;
}

.posts-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

.post-card {
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0,0,0,0.06);
  transition: all 0.3s ease;
}

.post-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.12);
}

.card-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-content {
  padding: 1.5rem;
}

.card-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin: 0.5rem 0 1rem 0;
  line-height: 1.4;
}

.card-title a {
  color: #2c3e50;
  text-decoration: none;
}

.card-excerpt {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.card-link {
  color: #667eea;
  text-decoration: none;
  font-weight: 500;
}

.view-all {
  text-align: center;
}

/* Topics Section */
.topics-section {
  background: #f8f9fa;
  padding: 4rem 0;
  margin: 4rem 0;
}

.topics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.topic-card {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}

.topic-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.topic-card h3 {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #2c3e50;
}

.topic-card p {
  color: #4a5568;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.topic-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  justify-content: center;
}

.tag {
  background: #e3f2fd;
  color: #1976d2;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.85rem;
  font-weight: 500;
}

/* Responsive Design */
@media (max-width: 768px) {
  .blog-title {
    font-size: 2.5rem;
  }

  .featured-post {
    grid-template-columns: 1fr;
    gap: 0;
  }

  .post-content {
    padding: 2rem;
  }

  .posts-grid {
    grid-template-columns: 1fr;
  }

  .topics-grid {
    grid-template-columns: 1fr;
    padding: 0 1rem;
  }

  .blog-hero {
    padding: 3rem 0;
  }

  .section-header h2 {
    font-size: 2rem;
  }
}

/* Button Styles */
.btn.secondary {
  background: transparent;
  color: #667eea;
  border: 2px solid #667eea;
  padding: 0.75rem 2rem;
  text-decoration: none;
  border-radius: 6px;
  font-weight: 600;
  transition: all 0.3s ease;
}

.btn.secondary:hover {
  background: #667eea;
  color: white;
}
</style>