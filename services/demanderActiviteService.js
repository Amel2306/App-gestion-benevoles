const DemanderActivite = require('../models/demanderActivite');

exports.createDemanderActivite = async (demanderActiviteData) => {
  try {
    const newDemanderActivite = await DemanderActivite.create(demanderActiviteData);
    return newDemanderActivite;
  } catch (error) {
    throw new Error('Erreur lors de la création de demander_activite dans le service');
  }
};
