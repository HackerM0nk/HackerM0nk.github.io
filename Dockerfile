# Base image: Ruby with necessary dependencies for Jekyll
FROM ruby:3.2

# Install dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    nodejs \
    && rm -rf /var/lib/apt/lists/*

# Set the working directory inside the container
WORKDIR /usr/src/app

# Copy Gemfile for dependency installation
COPY Gemfile ./

# Install bundler and clear any existing bundle config
RUN gem install bundler:2.4.19 && \
    bundle config --delete path && \
    bundle config --delete without && \
    bundle install --retry 3

# Copy the entire site into the container
COPY . .

# Expose port 4000 for Jekyll server
EXPOSE 4000

# Command to serve the Jekyll site
CMD ["bundle", "exec", "jekyll", "serve", "-H", "0.0.0.0", "-w"]

