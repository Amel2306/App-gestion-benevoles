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

  try {
    await demanderActiviteService.accpeterDemande(id)
    res.status(201).json({message: "Demande bien accpeté"});
  }
  catch (error) {
    res.status(500).json({ message: 'Erreur lors de acceptation de demande dans le contrôleur' });
  }
}