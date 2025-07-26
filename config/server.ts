export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  url: env('NODE_ENV') === 'production' ? 'https://cms.tharara.com' : 'https://test-cms.tharara.com',
  cors: {
    origin: ['http://localhost:3000', 'http://localhost:3001', 'https://tharara.com', 'https://test.tharara.com', 'https://api.tharara.com', 'https://test-api.tharara.com'],
  },
});
