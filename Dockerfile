# Use a slim Ruby Alpine image
FROM ruby:3.2-alpine

# Install dependencies
RUN apk add --no-cache build-base nodejs npm git

# Set working directory
WORKDIR /usr/src/app

# Copy Gemfile early for caching
COPY Gemfile ./

# Install bundler and dependencies
RUN gem install bundler && bundle install

# Copy the rest of your Jekyll site
COPY . .

# Expose default Jekyll port
EXPOSE 4000

# Default command for development server
CMD ["bundle", "exec", "jekyll", "serve", "-H", "0.0.0.0", "-w"]
