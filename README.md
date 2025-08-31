# My Academic & Professional Website

This repository contains the source code for my personal website built using the [Academic Pages](https://github.com/academicpages/academicpages.github.io) Jekyll theme.  
The site is deployed via GitHub Pages and is available at:

**🔗 [https://hackerm0nk.github.io](https://hackerm0nk.github.io/)**

It serves as a central hub for my:
- Research & technical writing
- Software/security projects
- Publications, talks, and blog posts
- Portfolio & personal updates

---

## 🛠 How to Edit & Update

### 1. Update Site Information
Edit `_config.yml` to change:
- Name, bio, tagline
- Social media links
- Theme appearance

### 2. Add/Modify Pages
Add new `.md` files in `_pages/` for permanent pages (e.g., `/about/`).

### 3. Add Blog Posts
Create new Markdown files in `_posts/` using the format:

## 📂 Repository Structure (High-Level)

```
_root/                 → Site root (config files, homepage)
│
├── _config.yml         → Global site settings (title, description, menus, theme)
├── index.html          → Homepage layout
├── _pages/             → Static pages (About, CV, Contact, etc.)
├── _posts/             → Blog posts (`YYYY-MM-DD-title.md`)
├── _projects/          → Portfolio & project entries
├── _publications/      → Publication entries
├── _data/              → Menus, social links, skills data
├── _includes/          → Reusable HTML/Markdown snippets
├── _layouts/           → Page templates
├── assets/             → CSS, JS, icons, theme overrides
├── images/             → All image files
├── files/              → PDFs & downloadable resources (CV, reports, slides)
└── markdown_generator/ → Scripts to auto-generate markdown from TSV/CSV
```