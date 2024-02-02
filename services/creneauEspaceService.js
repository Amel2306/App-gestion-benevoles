const { Op } = require('sequelize');
const CreneauEspace = require('../models/creneauEspace');
const Zonebenevole = require('../models/zonebenevole');

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

exports.getCreneauEspaceByPost = async (postId, creneauId) => {
  try {
    const allZoneBenevoles = await Zonebenevole.findAll( {
      where: {
        post_id: {
          [Op.eq]: postId
        }
      }
    })
    const tabDemande = [];
    for (const zoneBen of allZoneBenevoles) {
      const allDemandes = await CreneauEspace.findAll ({
        where: {
          zonebenevoleId: {
            [Op.eq]: zoneBen.id
          },
          creneauId
        }
      })
      tabDemande.push(allDemandes)
    }
    console.log(tabDemande)
    return tabDemande
  }
  catch (err) {
    throw new Error ('Aucun Créneau trouvée pour cet espace')
  }
}
