const { DataTypes } = require("sequelize");
const db = require("../config/dbConfig");

const User = require("./user");

const Hebergement = db.define("hebergement", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  code_postale: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ville: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adresse: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  nb_places: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: "users",
      key: "id",
    },
  },
});

Hebergement.belongsTo(User, { foreignKey: "user_id", onDelete: "CASCADE" });
module.exports = Hebergement;
