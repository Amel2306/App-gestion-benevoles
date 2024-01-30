const Hebergement = require('../models/hebergement');
const DemandeLogement = require('../models/demandeLogement');


exports.createHebergement = async (hebergementData) => {
  try {
    const newHebergement = await Hebergement.create(hebergementData);
    return newHebergement;
  } catch (error) {
    throw new Error('Erreur lors de la création de l\'hébergement dans le service');
  }
};

exports.getAllHebergements = async () => {
  try {
    const allHebergements = await Hebergement.findAll();
    return allHebergements;
  } catch (error) {
    throw new Error('Erreur lors de la récupération des hébergements dans le service');
  }
};

exports.getHebergementById = async (hebergementId) => {
  try {
    const hebergement = await Hebergement.findByPk(hebergementId);
    
    if (!hebergement) {
      throw new Error('Hébergement non trouvé.');
    }
    
    return hebergement;
  } catch (error) {
    throw new Error('Erreur lors de la récupération de l\'hébergement dans le service');
  }
};

exports.updateHebergement = async (hebergementId, hebergementData) => {
  try {
    const hebergement = await Hebergement.findByPk(hebergementId);

    if (!hebergement) {
      throw new Error('Hébergement non trouvé.');
    }

    await hebergement.update(hebergementData);
    return hebergement;
  } catch (error) {
    throw new Error('Erreur lors de la mise à jour de l\'hébergement dans le service');
  }
};

exports.deleteHebergement = async (hebergementId) => {
  try {
    const hebergement = await Hebergement.findByPk(hebergementId);

    if (!hebergement) {
      throw new Error('Hébergement non trouvé.');
    }

    await hebergement.destroy();
    return 'Hébergement supprimé avec succès.';
  } catch (error) {
    throw new Error('Erreur lors de la suppression de l\'hébergement dans le service');
  }
};


exports.rendreInvisible = async (hebergementId) => {
  try {
    const hebergementInvisible = this.updateHebergement(hebergementId, {visible: 0})
    return hebergementInvisible;
  }
  catch (error) {
    throw new Error('Erreur lors de la modification de l\'hébergement dans le service');
  }
}

exports.getHebergementByUser = async (userId) => {
  try {
    const hebergements = await Hebergement.findAll({
      where: { user_id: userId },
    });
    return hebergements;
  } catch (error) {
    throw new Error('Erreur lors de la récupération des hébergements par utilisateur dans le service');
  }
};

exports.getHebergementDispo = async () => {
  try {

    const hebergements = await Hebergement.findAll({
      where: { visible: 1 },
    });
    console.log(hebergements)


    const listeHebergement = []
    for (heb of hebergements) {
      const placePrises = await DemandeLogement.findAll({
        where: {
          hebergementId: heb.dataValues.id
        }
      })
      console.log("*****" + placePrises.length)
      if (placePrises && placePrises.length < heb.dataValues.nb_places) {
        listeHebergement.push(heb.dataValues)
      }
    }
    return listeHebergement
  }
  catch (error) {
    throw new Error('Aucun logement disponible trouvé');
  }
}