const { DataTypes } = require("sequelize");
const db = require("../config/dbConfig");
const User = require("./user");
const Hebergement = require("./hebergement");

const DemandeLogement = db.define(
  "demande_logement",
  {
    statut: {
      type: DataTypes.ENUM,
      values: ["en_attente", "accepte", "refuse"],
      allowNull: false,
      defaultValue: "en_attente",
    },
  },
  {
    primaryKey: true,
    unique: true,
  }
);

User.belongsToMany(Hebergement, { through: DemandeLogement });
Hebergement.belongsToMany(User, { through: DemandeLogement });

module.exports = DemandeLogement;
