require('dotenv').config();

const config = {
  app: {
    name: process.env.APP_NAME || "api-aluguel",
    env: process.env.APP_ENV || "local",
    key: process.env.APP_KEY || "teste",
    debug: process.env.APP_DEBUG || true,
    url: process.env.APP_URL || "http://localhost",
    port: process.env.APP_PORT || 3000
  },
  db: {
    connection: process.env.DB_CONNECTION || "mongo",
    host: process.env.DB_HOST || "docker.aluguel.mongo",
    port: process.env.DB_PORT || "27017",
    database: process.env.DB_DATABASE || "api-aluguel",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "root"
  },
  mail: {
    driver: "smtp",
    host: "smtp.mailtrap.io",
    port: "2525",
    username: null,
    password: null,
    encryption: null
  }
};

module.exports.config = config;
