const { Op } = require('sequelize');
const CreneauEspace = require('../models/creneauEspace');

exports.createCreneauEspace = async (creneauEspaceData) => {
  try {
    const newCreneauEspace = await CreneauEspace.create(creneauEspaceData);
    return newCreneauEspace;
  } catch (error) {
    throw new Error('Erreur lors de la création du CreneauEspace dans le service');
  }
};


exports.getCreneauEspaceById = async (creneauId, espaceId) => {
  try {
    const creneauEspace = await CreneauEspace.findOne({
      where: {
        creneauId: {
          [Op.eq]: creneauId
        },
        zonebenevoleId: {
          [Op.eq]: espaceId
        }
      }
    })
    return creneauEspace
  }
  catch (error ) {
    throw new Error('Erreur lors de la création du CreneauEspace dans le service');
  }
}