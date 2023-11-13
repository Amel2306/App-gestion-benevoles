const { DataTypes } = require("sequelize");
const db = require("../config/dbConfig");

const ZonePlan = require("./zoneplan");

const Zonebenevole = db.define("zonebenevole", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom_zb: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  zone_plan_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references : {
      model:"zoneplans",
      key:"id",
    }
  },
});

Zonebenevole.belongsTo(ZonePlan, { foreignKey: 'zone_plan_id', onDelete:"CASCADE" });
module.exports = Zonebenevole;