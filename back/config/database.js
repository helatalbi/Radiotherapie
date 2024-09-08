//config/database.js apès dvops
const { Sequelize } = require("sequelize");

const sequelize = new Sequelize(
  process.env.MYSQL_DATABASE || "radiotherapieDB",
  process.env.MYSQL_USER || "root",
  process.env.MYSQL_PASSWORD || "root",
  {
    host: process.env.MYSQL_HOST || "db",
    port: process.env.MYSQL_PORT || 3306,

    dialect: "mysql",
    logging: false,
  }
);

module.exports = sequelize;

//config/database.js avant dvops
//const { Sequelize } = require('sequelize');

//const sequelize = new Sequelize(
//  process.env.DB_NAME || 'radiotherapieDB', 
//  process.env.DB_USER || 'root', 
//  process.env.DB_PASSWORD || '', {
//  host: process.env.DB_HOST || 'localhost',
//  dialect: 'mysql',
//});

//module.exports = sequelize;
