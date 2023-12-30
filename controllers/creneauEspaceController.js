const creneauEspaceService = require('../services/creneauEspaceService');

exports.createCreneauEspace = async (req, res) => {
  const creneauEspaceData = req.body;

  try {
    const newCreneauEspace = await creneauEspaceService.createCreneauEspace(creneauEspaceData);
    res.status(201).json(newCreneauEspace);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création du CreneauEspace dans le contrôleur' });
  }
};