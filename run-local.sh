#!/bin/bash

# Jekyll Local Development Setup Script
# Multiple options to run your Jekyll site

echo "🚀 Jekyll Development Options"
echo "=============================="

# Option 1: Direct Bundle Install (Recommended if you have Ruby)
echo ""
echo "Option 1: Direct Jekyll (if you have Ruby installed)"
echo "---------------------------------------------------"
echo "Commands to run:"
echo "  bundle install"
echo "  bundle exec jekyll serve --livereload --host 0.0.0.0"
echo ""

# Option 2: Docker with retries
echo "Option 2: Docker with retries (if Docker issues persist)"
echo "-------------------------------------------------------"
echo "Run this command for a more robust Docker setup:"
echo "  docker run --rm -it -p 4000:4000 -p 35729:35729 -v \$(pwd):/srv/jekyll jekyll/jekyll:latest jekyll serve --livereload --force_polling"
echo ""

# Option 3: Manual cleanup and rebuild
echo "Option 3: Full cleanup and rebuild"
echo "----------------------------------"
echo "If you're still having issues, run these commands one by one:"
echo "  rm -rf _site .jekyll-cache .jekyll-metadata .sass-cache vendor"
echo "  docker system prune -f"
echo "  docker compose up --build --force-recreate"
echo ""

# Option 4: Native Ruby setup
echo "Option 4: Native Ruby setup (no Docker)"
echo "---------------------------------------"
echo "If you prefer to avoid Docker completely:"
echo "  1. Install Ruby 3.x via rbenv or rvm"
echo "  2. gem install bundler"
echo "  3. bundle install"
echo "  4. bundle exec jekyll serve --livereload"
echo ""

echo "Choose the option that works best for your setup!"
echo "Your changes to the header styling should be visible immediately with any of these methods."