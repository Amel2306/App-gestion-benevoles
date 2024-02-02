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

exports.getCreneauEspaceById = async (req, res) => {
  const creneauId = req.params.creneauId
  const espaceId = req.params.espaceId
  try {
    const creneauEspace = await creneauEspaceService.getCreneauEspaceById(creneauId, espaceId)
    res.status(200).json(creneauEspace)
  }
  catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du CreneauEspace dans le contrôleur', error });
  }
}

exports.getCreneauEspaceByPost = async (req, res) => {
  const creneauId = req.params.creneauId
  const postId = req.params.postId
  try {
    const creneauEspace = await creneauEspaceService.getCreneauEspaceByPost(creneauId, postId)
    res.status(200).json(creneauEspace)
  }
  catch (error) {
    res.status(500).json({ message: 'Erreur lors de la récupération du CreneauEspace dans le contrôleur', error });
  }
}