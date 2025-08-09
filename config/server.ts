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

// config/server.js
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  url: env('PUBLIC_URL', 'https://cms.tharara.com'), // Add your custom domain
  proxy: true,
  app: {
    keys: env.array('APP_KEYS'),
  },
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET'),
    },
    // Change admin path for security
    // url: env('ADMIN_URL', '/dashboard'),
    // Disable admin panel in production
    // serveAdminPanel: env.bool('SERVE_ADMIN', env('NODE_ENV') !== 'production'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
