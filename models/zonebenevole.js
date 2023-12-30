const { DataTypes } = require("sequelize");
const db = require("../config/dbConfig");
const ZonePlan = require("./zoneplan");
const Festivale = require("./festivale");
const Post = require("./post");

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
    references: {
      model: "zoneplans",
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
  post_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: "posts",
      key: "id",
    },
  },
});

Zonebenevole.belongsTo(Post, { foreignKey: "post_id", onDelete: "SET NULL" });
Zonebenevole.belongsTo(Festivale, {
  foreignKey: "festivale_id",
  onDelete: "CASCADE",
});
Zonebenevole.belongsTo(ZonePlan, {
  foreignKey: "zone_plan_id",
  onDelete: "CASCADE",
});
module.exports = Zonebenevole;
