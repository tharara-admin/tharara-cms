# Multi-stage build for optimized image size
FROM node:18-alpine AS dependencies
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production

FROM node:18-alpine AS build
RUN apk update && apk add --no-cache build-base gcc autoconf automake zlib-dev libpng-dev vips-dev
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM node:18-alpine
RUN apk add --no-cache vips-dev
WORKDIR /app

# Copy dependencies
COPY --from=dependencies /app/node_modules ./node_modules

# Copy built files - these should exist after build
COPY --from=build /app/package*.json ./

# Copy directories that should exist in a Strapi project
# Using || true to continue if they don't exist
RUN mkdir -p dist build public

COPY --from=build /app/dist ./dist || true
COPY --from=build /app/build ./build || true
COPY --from=build /app/public ./public || true

# Copy optional files - won't fail if they don't exist
COPY --from=build /app/favicon.ic[o] ./ || true
COPY --from=build /app/.env.exampl[e] ./ || true

# Copy Strapi specific directories if they exist
COPY --from=build /app/src ./src || true
COPY --from=build /app/config ./config || true
COPY --from=build /app/database ./database || true
COPY --from=build /app/api ./api || true
COPY --from=build /app/extensions ./extensions || true
COPY --from=build /app/exports ./exports || true

EXPOSE 1337

CMD ["npm", "start"]
