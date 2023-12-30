const { DataTypes } = require("sequelize");
const db = require("../config/dbConfig");
const Association = require("./association");

const User = db.define("user", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  prenom: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  numero_tel: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  pseudo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  bigraphie: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  cherche_hebergement: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  propose_hebergement: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  taille: {
    type: DataTypes.ENUM,
    values: ["xs", "s", "m", "l", "xl", "2xl", "3xl", "4xl"],
    allowNull: false,
  },
  association_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
    references: {
      model: "associations",
      key: "id",
    },
  },
});

User.belongsTo(Association, {
  foreignKey: "association_id",
  onDelete: "SET NULL",
});

module.exports = User;
