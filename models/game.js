const { DataTypes } = require("sequelize");
const db = require("../config/dbConfig");

const ZoneBenevole = require("./zonebenevole");

const Game = db.define("game", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom_du_jeu: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  notice: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  zone_benevole_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references : {
      model:"zonebenevoles",
      key:"id",
    }
  },
  a_animer: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  recu: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false, // Valeur par défaut, si nécessaire
  },
  auteur: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  editeur: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  exposant: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  nb_joueurs: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  checkbox_joueur_age_min: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  checkbox_age: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  duree: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  type: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  Pavant_premiere: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  present: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  mechanismes: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  themes: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  tags: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  image: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  logo: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  video: {
    type: DataTypes.STRING,
    allowNull: true,
  },
});

//relation
Game.belongsTo(ZoneBenevole, { foreignKey: 'zone_benevole_id', onDelete:"SET NULL"});

module.exports = Game;
