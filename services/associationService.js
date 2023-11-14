const Association = require("../models/association");

exports.getAllAssociations = async () => {
  try {
    const associations = await Association.findAll();
    return associations;
  } catch (error) {
    console.error("Erreur lors de la récupération des associations :", error);
    throw new Error("Erreur lors de la récupération des associations.");
  }
};

exports.getAssociationById = async (associationId) => {
  try {
    const association = await Association.findByPk(associationId);

    if (!association) {
      throw new Error("Association non trouvée.");
    }

    return association;
  } catch (error) {
    console.error("Erreur lors de la récupération de l'association par ID :", error);
    throw new Error("Erreur lors de la récupération de l'association par ID.");
  }
};

exports.createAssociation = async (associationData) => {
  try {
    const newAssociation = await Association.create(associationData);
    return newAssociation;
  } catch (error) {
    console.error("Erreur lors de la création de l'association :", error);
    throw new Error("Erreur lors de la création de l'association.");
  }
};

exports.updateAssociation = async (associationId, updatedAssociationData) => {
  try {
    const association = await Association.findByPk(associationId);

    if (!association) {
      throw new Error("Association non trouvée.");
    }

    await association.update(updatedAssociationData);
    return association;
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'association :", error);
    throw new Error("Erreur lors de la mise à jour de l'association.");
  }
};

exports.deleteAssociation = async (associationId) => {
  try {
    const association = await Association.findByPk(associationId);

    if (!association) {
      throw new Error("Association non trouvée.");
    }

    await association.destroy();
    return { message: "Association supprimée avec succès." };
  } catch (error) {
    console.error("Erreur lors de la suppression de l'association :", error);
    throw new Error("Erreur lors de la suppression de l'association.");
  }
};
