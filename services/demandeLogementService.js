const DemandeLogement = require("../models/demandeLogement");

exports.createDemandeLogement = async (data) => {
    try {
      const nouvelleDemande = await DemandeLogement.create(data);
      return nouvelleDemande;
    } catch (err) {
      throw err;
    }
  };
  

exports.getAllDemandesLogement = async () => {
  try {
    const demandes = await DemandeLogement.findAll();
    return demandes;
  } catch (err) {
    throw err;
  }
};

exports.getDemandeLogementByHebergementId = async (hebergementId) => {
  try {
    const demande = await DemandeLogement.findAll({
        where: {
            hebergement_id : hebergementId
        }
    });
    return demande;
  } catch (err) {
    throw err;
  }
};

exports.updateDemandeLogement = async (demandeId, newData) => {
  try {
    const demande = await DemandeLogement.findByPk(demandeId);
    if (!demande) {
      return null;
    }
    await demande.update(newData);
    return demande;
  } catch (err) {
    throw err;
  }
};

exports.deleteDemandeLogement = async (demandeId) => {
  try {
    const demande = await DemandeLogement.findByPk(demandeId);
    if (!demande) {
      return null;
    }
    await demande.destroy();
    return true;
  } catch (err) {
    throw err;
  }
};
