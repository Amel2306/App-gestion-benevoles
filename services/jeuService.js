const Jeu = require ("../models/jeu");

exports.getAllJeux = async () => {
  try {
    const jeux = await Jeu.findAll();
    return jeux;
  } catch (error) {
    throw new Error("Erreur lors de la récupération des jeux.");
  }
};

exports.createJeu = async (jeuData) => {
  try {
    const newJeu = await Jeu.create(jeuData);
    return newJeu;
  } catch (error) {
    throw new Error('Erreur lors de la création du jeu dans le service');
  }
};


exports.updateJeu = async (jeuId, updatedJeuData) => {
  try {
    const jeu = await Jeu.findByPk(jeuId);
    if (!jeu) {
      throw new Error("Jeu non trouvé.");
    }

    await jeu.update(updatedJeuData);
    return jeu;
  } catch (error) {
    throw new Error("Erreur lors de la mise à jour du jeu.");
  }
};

exports.deleteJeu = async (jeuId) => {
  try {
    const jeu = await Jeu.findByPk(jeuId);
    if (!jeu) {
      throw new Error("Jeu non trouvé.");
    }

    await jeu.destroy();
    return "Jeu supprimé avec succès.";
  } catch (error) {
    throw new Error("Erreur lors de la suppression du jeu.");
  }
};
