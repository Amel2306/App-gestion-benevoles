const { DataTypes } = require("sequelize");
const db = require("../config/dbConfig");

const Post = db.define("post", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom_post: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false
  }
});

module.exports = Post;
