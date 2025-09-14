module.exports = ({ env }) => {
  const isProduction = env('NODE_ENV') === 'production';
  const databaseSSL = env.bool('DATABASE_SSL', false);
  
  return {
    connection: {
      client: 'postgres',
      connection: {
        host: env('DATABASE_HOST', 'localhost'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'strapi'),
        user: env('DATABASE_USERNAME', 'strapi'),
        password: env('DATABASE_PASSWORD', 'strapi'),
        // Only use SSL if explicitly enabled and not in local development
        ssl: isProduction && databaseSSL ? { rejectUnauthorized: false } : false,
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
