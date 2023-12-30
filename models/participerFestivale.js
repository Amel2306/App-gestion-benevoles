const { DataTypes } = require("sequelize");
const db = require("../config/dbConfig");
const User = require("./user");
const Festivale = require("./festivale");

const ParticiperFestivale = db.define("participer_festivale", {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  festivale_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
  },
});

User.belongsToMany(Festivale, { through: ParticiperFestivale });
Festivale.belongsToMany(User, { through: ParticiperFestivale });

module.exports = ParticiperFestivale;
