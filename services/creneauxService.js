const Creneaux = require("../models/creneaux");

exports.getAllCreneaux = async () => {
  try {
    const creneaux = await Creneaux.findAll();
    return creneaux;
  } catch (error) {
    console.error("Erreur lors de la récupération des créneaux :", error);
    throw new Error("Erreur lors de la récupération des créneaux.");
  }
};

exports.getCreneauxById = async (creneauxId) => {
  try {
    const creneaux = await Creneaux.findByPk(creneauxId);

    if (!creneaux) {
      throw new Error("Créneaux non trouvé.");
    }

    return creneaux;
  } catch (error) {
    console.error("Erreur lors de la récupération des créneaux par ID :", error);
    throw new Error("Erreur lors de la récupération des créneaux par ID.");
  }
};

exports.createCreneaux = async (creneauxData) => {
  try {
    const newCreneaux = await Creneaux.create(creneauxData);
    return newCreneaux;
  } catch (error) {
    console.error("Erreur lors de la création des créneaux :", error);
    throw new Error("Erreur lors de la création des créneaux");
  }
};

exports.updateCreneaux = async (creneauxId, updatedCreneauxData) => {
  try {
    const creneaux = await Creneaux.findByPk(creneauxId);

    if (!creneaux) {
      throw new Error("Créneaux non trouvé.");
    }

    await creneaux.update(updatedCreneauxData);
    return creneaux;
  } catch (error) {
    throw new Error("Erreur lors de la mise à jour des créneaux.");
  }
};

exports.deleteCreneaux = async (creneauxId) => {
  try {
    const creneaux = await Creneaux.findByPk(creneauxId);

    if (!creneaux) {
      throw new Error("Créneaux non trouvé.");
    }

    await creneaux.destroy();
    return { message: "Créneaux supprimé avec succès." };
  } catch (error) {
    throw new Error("Erreur lors de la suppression des créneaux.");
  }
};
