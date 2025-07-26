FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE ${PORT:-1337}
HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost:${PORT:-1337} || exit 1
CMD ["npm", "run", "start"]
