require("dotenv").config();

module.exports = {
  development: {
    username: "postgres",
    password: "root",
    database: "chat_db_27",
    host: "localhost",
    dialect: "postgres",
    logging: false,
  },
  test: {
    username: "postgres",
    password: 1234,
    database: "chat_db_test",
    host: "127.0.0.1",
    dialect: "postgres",
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "postgres",
    logging: false, // no quiero que sequelize haga console.logs
    dialectOptions: { ssl: { required: true, rejectUnauthorized: false } },
  },
};