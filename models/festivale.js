const { DataTypes } = require("sequelize");
const db = require("../config/dbConfig");

const Festivale = db.define("festivale", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  annee: {
    type: DataTypes.STRING,
    allowNull: false
  },
  date_evenement: {
    type: DataTypes.DATE,
    allowNull:false
  },
});

module.exports = Festivale;
