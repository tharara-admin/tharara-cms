FROM node:18

# Use non-alpine for better compatibility
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies (don't skip dev deps)
RUN npm install

# Copy all files
COPY . .

# Build Strapi
RUN npm run build

# Don't remove dev dependencies - some are needed at runtime
# RUN npm prune --production

# Cloud Run sets PORT to 8080
ENV NODE_ENV=production
ENV HOST=0.0.0.0

EXPOSE 8080

# Start Strapi
CMD ["npm", "start"]
