module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DB_HOST', 'db'),
        port: env.int('DB_PORT', 5432),
        database: env('DB_NAME', 'manual_do_vestibulando'),
        username: env('DB_USERNAME', 'admin'),
        password: env('DB_PASSWORD', 'password'),
        ssl: env.bool('DB_SSL', false),
      },
      options: {}
    },
  },
});
