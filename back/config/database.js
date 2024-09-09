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

// Synchroniser les modèles avec la base de données
sequelize.sync({ alter: true }) // alter: true ajuste les tables existantes sans les supprimer
  .then(() => {
    console.log("Les modèles sont synchronisés avec la base de données.");
  })
  .catch((error) => {
    console.error("Erreur lors de la synchronisation des modèles : ", error);
  });

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
