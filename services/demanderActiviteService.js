const DemanderActivite = require('../models/demanderActivite');
const { Op } = require('sequelize');

exports.createDemanderActivite = async (demanderActiviteData) => {
  try {
    const newDemanderActivite = await DemanderActivite.create(demanderActiviteData);
    return newDemanderActivite;
  } catch (error) {
    throw new Error('Erreur lors de la création de demander_activite dans le service');
  }
};

exports.accpeterDemande = async (demandeId) => {
  try {
    const demandeActivite = await DemanderActivite.findByPk(demandeId);
    demandeActivite.accepte = 1;
    await demandeActivite.save();

    const otherDemandeActivites = await DemanderActivite.findAll({
      where: {
        id: {
          [Op.not]: demandeId
        }
      }
    });

    if (otherDemandeActivites) {
      for (const otherDemandeActivite of otherDemandeActivites) {
        otherDemandeActivite.archive = 1;
        await otherDemandeActivite.save();
      }
    }
  } catch (error) {
    throw new Error('Erreur lors de l\'acceptation de cette demande d\'activite dans le service');
  }
}

exports.getDemandeByUsers = async (userId) => {
  try {
    const allDemandes = await DemanderActivite.findAll ({
      where: {
        user_id: {
          [Op.eq]: userId
        }
      }
    })
    return allDemandes
  }
  catch (err) {
    throw new Error ('Aucune demande trouvée pour cet utilisateur')
  }
}

