FROM node:18-alpine

# Install build dependencies
RUN apk add --no-cache build-base gcc autoconf automake libc6-compat zlib-dev libpng-dev vips-dev git python3 make g++

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy application files
COPY . .

# Build Strapi admin panel
RUN npm run build

# Clean dev dependencies
RUN npm prune --production

# Create uploads directory
RUN mkdir -p public/uploads

# Cloud Run uses PORT 8080
ENV NODE_ENV=production
ENV HOST=0.0.0.0

EXPOSE 8080

# Start Strapi
CMD ["npm", "start"]
