const demanderActiviteService = require('../services/demanderActiviteService');

exports.createDemanderActivite = async (req, res) => {
  const demanderActiviteData = req.body;

  try {
    const newDemanderActivite = await demanderActiviteService.createDemanderActivite(demanderActiviteData);
    res.status(201).json(newDemanderActivite);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création de demander_activite dans le contrôleur' });
  }
};
