const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE || "radiotherapieDB",
  process.env.MYSQL_USER || "root",
  process.env.MYSQL_PASSWORD || "root",
  {
    host: process.env.MYSQL_HOST || "db",
    port: process.env.MYSQL_PORT || 3307,
    dialect: "mysql",
    logging: false,
  }
);

module.exports = sequelize;
