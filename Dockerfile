FROM node:18-alpine

# Only need basic build tools now
RUN apk add --no-cache python3 make g++

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy all files
COPY . .

# Build Strapi admin panel
RUN npm run build

# Create uploads directory
RUN mkdir -p public/uploads

# Cloud Run sets PORT to 8080
ENV NODE_ENV=production
ENV HOST=0.0.0.0

EXPOSE 8080

CMD ["npm", "start"]
