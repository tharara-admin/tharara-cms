FROM node:18-alpine

# Install build dependencies
RUN apk add --no-cache python3 make g++

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (including devDependencies for build)
RUN npm ci

# Copy all files
COPY . .

# Build Strapi
RUN npm run build

# Remove development dependencies
RUN npm prune --production

# Cloud Run sets PORT to 8080
ENV PORT=8080
ENV HOST=0.0.0.0

EXPOSE 8080

CMD ["npm", "run", "start"]
