export default ({ env }) => {
  const port = env.int('PORT', 1337);
  const host = env('HOST', '0.0.0.0');

  console.log('=== STRAPI STARTUP DEBUG ===');
  console.log('PORT env var:', process.env.PORT);
  console.log('HOST env var:', process.env.HOST);
  console.log('Computed port:', port);
  console.log('Computed host:', host);
  console.log('NODE_ENV:', process.env.NODE_ENV);
  console.log('============================');

  return {
    host: host,
    port: port,
    app: {
      keys: env.array('APP_KEYS'),
    },
    url: env('NODE_ENV') === 'production' ? 'https://cms.tharara.com' : 'https://test-cms.tharara.com',
    cors: {
      origin: ['http://localhost:3000', 'http://localhost:3001', 'https://tharara.com', 'https://test.tharara.com', 'https://api.tharara.com', 'https://test-api.tharara.com'],
    },
  };
};
