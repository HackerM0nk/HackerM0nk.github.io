#!/bin/bash

echo "🚀 Starting Jekyll Native Development Server"
echo "============================================"

# Clean up any existing build artifacts
echo "🧹 Cleaning up previous builds..."
rm -rf _site .jekyll-cache .jekyll-metadata .sass-cache

# Check if bundle is available
if ! command -v bundle &> /dev/null; then
    echo "❌ Bundle not found. Installing bundler..."
    gem install bundler
fi

# Install dependencies
echo "📦 Installing dependencies..."
bundle install

# Start Jekyll with live reload
echo "🏃 Starting Jekyll server with LiveReload..."
echo "📡 Server will be available at: http://localhost:4000"
echo "🔄 LiveReload will refresh your browser automatically"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

bundle exec jekyll serve --livereload --host 0.0.0.0 --force_polling