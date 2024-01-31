const hebergementService = require('../services/hebergementService');

exports.createHebergement = async (req, res) => {
  const hebergementData = req.body;

  try {
    const newHebergement = await hebergementService.createHebergement(hebergementData);
    res.status(201).json(newHebergement);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création de l\'hébergement dans le contrôleur' });
  }
};

exports.getAllHebergements = async (req, res) => {
  try {
    const allHebergements = await hebergementService.getAllHebergements();
    res.status(200).json(allHebergements);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des hébergements dans le contrôleur' });
  }
};

exports.getHebergementById = async (req, res) => {
  const hebergementId = req.params.id;

  try {
    const hebergement = await hebergementService.getHebergementById(hebergementId);
    res.status(200).json(hebergement);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération de l\'hébergement dans le contrôleur' });
  }
};

exports.updateHebergement = async (req, res) => {
  const hebergementId = req.params.id;
  const hebergementData = req.body;

  try {
    const updatedHebergement = await hebergementService.updateHebergement(hebergementId, hebergementData);
    res.status(200).json(updatedHebergement);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'hébergement dans le contrôleur' });
  }
};

exports.deleteHebergement = async (req, res) => {
  const hebergementId = req.params.id;

  try {
    const result = await hebergementService.deleteHebergement(hebergementId);
    res.status(200).json({ message: result });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la suppression de l\'hébergement dans le contrôleur' });
  }
};

exports.rendreInvisible = async (req, res) => {
  const hebergementId = req.params.id;

  try {
    const hebergement = await hebergementService.rendreInvisible(hebergementId);
    res.status(200).json(hebergement);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la visibilité dans le contrôleur' });
  }
};

exports.rendreVisible = async (req, res) => {
  const hebergementId = req.params.id;

  try {
    const hebergement = await hebergementService.rendreVisible(hebergementId);
    res.status(200).json(hebergement);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la visibilité dans le contrôleur' });
  }
};

exports.getHebergementByUser = async (req, res) => {
  const userId = req.params.userId;

  try {
    const hebergements = await hebergementService.getHebergementByUser(userId);
    res.status(200).json(hebergements);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des hébergements par utilisateur dans le contrôleur' });
  }
};

exports.getHebergementDispo = async (req, res) => {
  try {
    console.log("$$$$$$$$$$$$$$$$$")

    const hebergements = await hebergementService.getHebergementDispo();
    res.status(200).json(hebergements);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération de tous les hébergements disponibles dans le contrôleur' });
  }
};

