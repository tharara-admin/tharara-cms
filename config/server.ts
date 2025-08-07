// export default ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
//   // Use different URLs based on environment
//   url: env('NODE_ENV') === 'production'
//     ? 'https://cms.tharara.com'
//     : env('NODE_ENV') === 'test'
//       ? 'https://test-cms.tharara.com'
//       : undefined, // For development, let Strapi auto-detect
//   cors: {
//     origin: [
//       'http://localhost:3000',
//       'http://localhost:3001',
//       'https://tharara.com',
//       'https://test.tharara.com',
//       'https://api.tharara.com',
//       'https://test-api.tharara.com'
//     ],
//     credentials: true,
//   },
//   // Add security headers for production
//   ...(env('NODE_ENV') === 'production' && {
//     proxy: true,
//     headers: {
//       'X-Frame-Options': 'DENY',
//       'X-Content-Type-Options': 'nosniff',
//       'Referrer-Policy': 'same-origin',
//       'Permissions-Policy': 'geolocation=(), microphone=(), camera=()',
//     },
//   }),
// });

// module.exports = ({ env }) => ({
//   host: env('HOST', '0.0.0.0'),
//   port: env.int('PORT', 1337),
//   app: {
//     keys: env.array('APP_KEYS'),
//   },
//   admin: {
//     auth: {
//       secret: env('ADMIN_JWT_SECRET'),
//     },
//   },
//   webhooks: {
//     populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
//   },
// });

// test-server.js
const http = require('http');

const port = process.env.PORT || 8080;
const host = '0.0.0.0';

const server = http.createServer((req, res) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);

  if (req.url === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
      status: 'ok',
      timestamp: new Date().toISOString(),
      port: port,
      env: process.env.NODE_ENV || 'not set'
    }));
  } else {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Tharara CMS will be here soon! Port: ' + port);
  }
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
