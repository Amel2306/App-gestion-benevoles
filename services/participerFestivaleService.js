const ParticiperFestivale = require('../models/participerFestivale');

exports.createParticipation = async (dataParticipation) => {
  try {
    const newParticipation = await ParticiperFestivale.create(dataParticipation );
    return newParticipation;
  } catch (error) {
    throw new Error('Erreur lors de la création de la participation dans le service');
  }
};
