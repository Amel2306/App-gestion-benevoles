const { DataTypes } = require("sequelize");
const db = require("../config/dbConfig");
const Creneau = require("./creneau");
const Zonebenevole = require("./zonebenevole");
const User = require("./user");

const demanderActivite = db.define(
  "demander_activite",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    creneau_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "creneaus",
        key: "id",
      },
    },

    zonebenevole_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "zonebenevoles",
        key: "id",
      },
    },

    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "users",
        key: "id",
      },
    },
    accepte: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    archive: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    uniqueKeys: {
      TableIntermediaire_unique: {
        fields: ["creneau_id", "zonebenevole_id", "user_id"],
      },
    },
    timestamps: false,
    freezeTableName: true,
  }
);

demanderActivite.belongsTo(User, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});
demanderActivite.belongsTo(Zonebenevole, {
  foreignKey: "zonebenevole_id",
  onDelete: "CASCADE",
});
demanderActivite.belongsTo(Creneau, {
  foreignKey: "creneau_id",
  onDelete: "CASCADE",
});

module.exports = demanderActivite;
