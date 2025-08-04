module.exports = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            host: env('DATABASE_HOST'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME'),
            user: env('DATABASE_USERNAME'),
            password: env('DATABASE_PASSWORD'),
            ssl: env.bool('DATABASE_SSL', false),
        },
        pool: {
            min: 0,
            max: 5,
            acquireTimeoutMillis: 300000,
            createTimeoutMillis: 300000,
            destroyTimeoutMillis: 5000,
            idleTimeoutMillis: 30000,
            reapIntervalMillis: 1000,
            createRetryIntervalMillis: 200,
        },
    },
});
