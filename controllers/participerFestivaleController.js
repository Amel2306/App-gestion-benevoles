const participerFestivaleService = require('../services/participerFestivaleService');

exports.createParticipation = async (req, res) => {
  const dataParticipation = req.body;

  try {
    const newParticipation = await participerFestivaleService.createParticipation(dataParticipation);
    res.status(201).json(newParticipation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création de la participation dans le contrôleur' });
  }
};
