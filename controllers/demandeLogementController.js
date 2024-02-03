const demandeLogementService = require("../services/demandeLogementService");

// Créer une demande de logement
exports.createDemandeLogementController = async (req, res, next) => {
  try {
    const demandeData = req.body;
    const nouvelleDemande = await demandeLogementService.createDemandeLogement(
      demandeData
    );
    res.status(201).json(nouvelleDemande);
  } catch (err) {
    next(err);
  }
};

// Obtenir toutes les demandes de logement
exports.getAllDemandesLogement = async (req, res, next) => {
  try {
    const demandes = await demandeLogementService.getAllDemandesLogement();
    res.status(200).json(demandes);
  } catch (err) {
    next(err);
  }
};

exports.getDemandeLogementByHebergementId = async (req, res) => {
  const hebergementId = req.params.hebergementId;
  try {
    const demande = await demandeLogementService.getDemandeLogementByHebergementId(hebergementId);
    res.status(200).json(demande);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


exports.updateDemandeLogement = async (req, res) => {
  const { userId, hebergementId } = req.params;
  const newData = req.body;
  try {
    const updatedDemande = await demandeLogementService.updateDemandeLogement(userId, hebergementId, newData);
    if (updatedDemande) {
      res.status(200).json(updatedDemande);
    } else {
      res.status(404).json({ message: "Demande de logement non trouvée" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// TODO : revoir l'id
exports.deleteDemandeLogement = async (req, res, next) => {
  const demandeId = req.params.id;
  try {
    const deleted = await demandeLogementService.deleteDemandeLogement(
      demandeId
    );
    if (!deleted) {
      return res
        .status(404)
        .json({ message: "Demande de logement non trouvée." });
    }
    res.status(204).end();
  } catch (err) {
    next(err);
  }
};
