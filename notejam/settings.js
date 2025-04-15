


var settings = {
  development: {
    db: process.env.DB_NAME || "notejam",
    user: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD ||"postgres",
    host: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || "5432",
    dsn: `postgres://postgres:postgres@db:5432/notejam`
  },
  production: {
    db: process.env.DB_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || "5432",
    dsn: `postgres://postgres:postgres@db:5432/notejam`
  }
};

var env = process.env.NODE_ENV || "development";

module.exports = settings[env];
//postgres://postgres:postgres@localhost:5432/notejam