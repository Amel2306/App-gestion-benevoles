const { DataTypes } = require("sequelize");
const db = require("../config/dbConfig");

const Association = db.define("association", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom_association: {
    type: DataTypes.STRING,
    allowNull: false
  },
  adresse: {
    type: DataTypes.STRING,
    allowNull: false
  },
  logo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  },
  site: {
    type: DataTypes.STRING,
    allowNull: true
  }
});

module.exports = Association;
