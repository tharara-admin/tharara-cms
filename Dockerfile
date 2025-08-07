# Dockerfile.test
FROM node:18-alpine

WORKDIR /app

# Copy test server
COPY test-server.js .

EXPOSE 8080

CMD ["node", "test-server.js"]
