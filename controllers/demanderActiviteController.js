const demanderActiviteService = require('../services/demanderActiviteService');

exports.createDemanderActivite = async (req, res) => {
  const demanderActiviteData = req.body;

  try {
    const newDemanderActivite = await demanderActiviteService.createDemanderActivite(demanderActiviteData);
    res.status(201).json(newDemanderActivite);
  } catch (error) {
    res.status(500).json({ message: 'Erreur lors de la création de demander_activite dans le contrôleur' });
  }
};

exports.accpeterDemande = async (req, res) => {
  const {id} = req.params
  const {festivalId} = req.params

  try {
    await demanderActiviteService.accpeterDemande(id, festivalId)
    res.status(201).json({message: "Demande bien accpeté"});
  }
  catch (error) {
    res.status(500).json({ message: 'Erreur lors de acceptation de demande dans le contrôleur' });
  }
}

exports.getDemandeByUsers = async (req,res) => {
  const {userId} = req.params

  try {
    const allDemandes = await demanderActiviteService.getDemandeByUsers(userId)
    res.status(201).json(allDemandes)
  }
  catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des demande du user dans le contrôleur' });
  }
}

exports.getDemandeByCreneau = async (req,res) => {
  const {creneauId} = req.params

  try {
    const allDemandes = await demanderActiviteService.getDemandeByCreneau(creneauId)
    res.status(201).json(allDemandes)
  }
  catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des demande pour ce créneau dans le contrôleur' });
  }
}


exports.getDemandeByZoneBenevole = async (req,res) => {
  const {zonebenevoleId} = req.params

  try {
    const allDemandes = await demanderActiviteService.getDemandeByZoneBenevole(zonebenevoleId)
    res.status(201).json(allDemandes)
  }
  catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des demande pour ce créneau dans le contrôleur' });
  }
}

exports.getDemandeAcceptee = async (req, res) => {
  try {
    const allDemandes = await demanderActiviteService.getDemandeAcceptee()
    res.status(201).json(allDemandes)
  }
  catch (error ) {
    res.status(500).json({ message: 'Erreur lors de la récupération des demandes acceptées dans le contrôleur' });
  }
}

exports.getDemandeByZoneCreneau = async (req, res) => {
  try {
    const {zoneId} = req.params
    const {creneauId} = req.params

    const demandes = await demanderActiviteService.getDemandeByZoneCreneau(zoneId,creneauId)
    res.status(201).json(demandes)
  }
  catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des demandes pour ce créneau et cette zone dans le contrôleur' });
  }
}

exports.getDemandeByZoneCreneauAccepte = async (req, res) => {
  try {
    const {zoneId} = req.params
    const {creneauId} = req.params

    const demandes = await demanderActiviteService.getDemandeByZoneCreneauAccepte(zoneId,creneauId)
    res.status(201).json(demandes)
  }
  catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des demandes acceptées pour ce créneau et cette zone dans le contrôleur' });
  }
}


exports.getDemandeByZPCreneauAccepte = async (req, res) => {
  try {
    const {zoneId} = req.params
    const {creneauId} = req.params

    const demandes = await demanderActiviteService.getDemandeByZPCreneauAccepte(zoneId,creneauId)
    res.status(201).json(demandes)
  }
  catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération des demandes acceptées pour ce créneau et cette zone dans le contrôleur' });
  }
}
