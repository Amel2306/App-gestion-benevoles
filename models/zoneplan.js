const { DataTypes } = require("sequelize");
const db = require("../config/dbConfig");

const Zoneplan = db.define("zoneplan", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom_zp: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

module.exports = Zoneplan;