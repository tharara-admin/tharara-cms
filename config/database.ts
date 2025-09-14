module.exports = ({ env }) => {
  const isProduction = env('NODE_ENV') === 'production';

  return {
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        ssl: isProduction ? { rejectUnauthorized: false } : env.bool('DATABASE_SSL', false),
        // For Cloud SQL connections
        ...(isProduction && {
          connectionTimeoutMillis: 10000,
          idleTimeoutMillis: 30000,
          max: 20,
        }),
      },
    },
  };
};
