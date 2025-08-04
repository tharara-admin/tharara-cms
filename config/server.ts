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

module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['toBeModified1', 'toBeModified2']),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
