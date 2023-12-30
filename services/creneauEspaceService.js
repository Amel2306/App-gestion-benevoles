const CreneauEspace = require('../models/creneauEspace');

exports.createCreneauEspace = async (creneauEspaceData) => {
  try {
    const newCreneauEspace = await CreneauEspace.create(creneauEspaceData);
    return newCreneauEspace;
  } catch (error) {
    throw new Error('Erreur lors de la création du CreneauEspace dans le service');
  }
};
