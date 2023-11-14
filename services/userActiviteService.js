const UserActivite = require('../models/userActivite');

exports.getAllUserActivites = async () => {
  try {
    const userActivites = await UserActivite.findAll();
    return userActivites;
  } catch (error) {
    console.error("Erreur lors de la récupération des UserActivites :", error);
    throw new Error("Erreur lors de la récupération des UserActivites.");
  }
};

exports.createUserActivite = async (userActiviteData) => {
  try {
    const newUserActivite = await UserActivite.create(userActiviteData);
    return newUserActivite;
  } catch (error) {
    console.error("Erreur lors de la création de UserActivite :", error);
    throw new Error("Erreur lors de la création de UserActivite.");
  }
};

exports.getUserActiviteById = async (id) => {
  try {
    const userActivite = await UserActivite.findByPk(id);
    if (!userActivite) {
      throw new Error("UserActivite non trouvé.");
    }
    return userActivite;
  } catch (error) {
    console.error("Erreur lors de la récupération de UserActivite par ID :", error);
    throw new Error("Erreur lors de la récupération de UserActivite par ID.");
  }
};

exports.updateUserActivite = async (id, updatedUserActiviteData) => {
  try {
    const userActivite = await UserActivite.findByPk(id);
    if (!userActivite) {
      throw new Error("UserActivite non trouvé.");
    }
    await userActivite.update(updatedUserActiviteData);
    return userActivite;
  } catch (error) {
    console.error("Erreur lors de la mise à jour de UserActivite :", error);
    throw new Error("Erreur lors de la mise à jour de UserActivite.");
  }
};

exports.deleteUserActivite = async (id) => {
  try {
    const userActivite = await UserActivite.findByPk(id);
    if (!userActivite) {
      throw new Error("UserActivite non trouvé.");
    }
    await userActivite.destroy();
    return { message: "UserActivite supprimé avec succès." };
  } catch (error) {
    console.error("Erreur lors de la suppression de UserActivite :", error);
    throw new Error("Erreur lors de la suppression de UserActivite.");
  }
};
