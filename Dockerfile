FROM node:18-alpine

# Install dependencies required for building
RUN apk update && apk add --no-cache \
    build-base \
    gcc \
    autoconf \
    automake \
    zlib-dev \
    libpng-dev \
    vips-dev \
    git \
    python3

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all application files
COPY . .

# Build Strapi admin panel
RUN npm run build

# Clean cache
RUN npm cache clean --force

# Set the port that Cloud Run expects
ENV PORT=1337
ENV HOST=0.0.0.0

EXPOSE 1337

# Start Strapi
CMD ["npm", "run", "start"]
