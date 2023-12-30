const { DataTypes } = require("sequelize");
const db = require("../config/dbConfig");

const Creneau = db.define("creneau", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  horaire_debut: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  horaire_fin: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  date: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
});

module.exports = Creneau;
