const { Sequelize } = require("sequelize");

const url_db =
  process.env.DATABASE_URL ||
  "mysql://app_benevoles:pas_de_rapport_34@localhost:3306/bd_app_benevole";

const sequelize = new Sequelize(url_db);

module.exports = sequelize;
