FROM node:18-alpine

# Install dependencies for building native modules (required for better-sqlite3)
RUN apk add --no-cache python3 make g++

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install ALL dependencies including better-sqlite3
RUN npm install
RUN npm install better-sqlite3 --save

# Copy all files
COPY . .

# Build Strapi admin panel
RUN npm run build

# Create necessary directories
RUN mkdir -p .tmp public/uploads

# Cloud Run sets PORT to 8080
ENV NODE_ENV=production
ENV HOST=0.0.0.0

EXPOSE 8080

CMD ["npm", "start"]
