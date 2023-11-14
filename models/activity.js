const { DataTypes } = require("sequelize");
const db = require("../config/dbConfig");

const Creneaux = require("./creneaux");
const Festivale = require("./festivale");
const ZoneBenevole = require("./zonebenevole");

const Activity = db.define("activity", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  creneaux_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "creneauxes",
      key: "id",
    },
  },
  zone_benevole_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "zonebenevoles",
      key: "id",
    },
  },
  festivale_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: "festivales",
      key: "id",
    },
  },
});

//relation
Activity.belongsTo(ZoneBenevole, { foreignKey: 'zone_benevole_id', onDelete:"CASCADE"});
Activity.belongsTo(Creneaux, { foreignKey: 'creneaux_id', onDelete:"CASCADE"});
Activity.belongsTo(Festivale, { foreignKey: 'festivale_id', onDelete:"CASCADE"});

module.exports = Activity;
