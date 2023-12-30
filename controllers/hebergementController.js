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
