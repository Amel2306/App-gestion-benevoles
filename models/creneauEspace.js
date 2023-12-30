const { DataTypes } = require("sequelize");
const db = require("../config/dbConfig");
const Creneau = require("./creneau");
const Zonebenevole = require("./zonebenevole");

const CreneauEspace = db.define(
  "creaneau_espace", // Nom de la table
  {
    // Colonnes de la table
    nb_benevoles_max: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    // Options du modèle
    primaryKey: true, // Définition de la clé primaire
    unique: true, // Définition de l'unicité
  }
);

Creneau.belongsToMany(Zonebenevole, { through: CreneauEspace });
Zonebenevole.belongsToMany(Creneau, { through: CreneauEspace });

module.exports = CreneauEspace;
