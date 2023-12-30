const Hebergement = require('../models/hebergement');

exports.createHebergement = async (hebergementData) => {
  try {
    const newHebergement = await Hebergement.create(hebergementData);
    return newHebergement;
  } catch (error) {
    throw new Error('Erreur lors de la création de l\'hébergement dans le service');
  }
};
