FROM node:18-alpine
RUN apk add --no-cache python3 make g++
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
RUN mkdir -p .tmp public/uploads
ENV NODE_ENV=production
ENV HOST=0.0.0.0
EXPOSE 8080
CMD ["npm", "start"]
