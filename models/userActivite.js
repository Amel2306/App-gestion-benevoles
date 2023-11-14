const { DataTypes } = require("sequelize");
const db = require("../config/dbConfig");
const User = require("./user");
const Activite = require("./activity");

const UserActivite = db.define("userActivite", {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: User,
      key: "id",
    },
  },
  activite_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    references: {
      model: Activite,
      key: "id",
    },
  },
});

User.belongsToMany(Activite, {
  through: UserActivite,
  foreignKey: "user_id",
  otherKey: "activite_id",
});

Activite.belongsToMany(User, {
  through: UserActivite,
  foreignKey: "activite_id",
  otherKey: "user_id",
});

module.exports = UserActivite;
