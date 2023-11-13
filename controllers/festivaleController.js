const festivaleServices = require('../services/festivaleService');

exports.getAllFestivales = async (req, res) => {
  try {
    const festivales = await festivaleServices.getAllFestivale();
    res.status(200).json(festivales);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des festivals.' });
  }
};

exports.getFestivaleById = async (req, res) => {
  const { id } = req.params;

  try {
    const festivale = await festivaleServices.getFestivaleById(id);
    res.status(200).json(festivale);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération du festival par ID.' });
  }
};

exports.createFestivale = async (req, res) => {
  const festivaleData = req.body;

  try {
    const newFestivale = await festivaleServices.createFestivale(festivaleData);
    res.status(201).json(newFestivale);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création du festival.' });
  }
};

exports.updateFestivale = async (req, res) => {
  const { id } = req.params;
  const updatedFestivaleData = req.body;

  try {
    const updatedFestivale = await festivaleServices.updateFestivale(id, updatedFestivaleData);
    res.status(200).json(updatedFestivale);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour du festival.' });
  }
};

exports.deleteFestivale = async (req, res) => {
  const { id } = req.params;

  try {
    await festivaleServices.deleteFestivale(id);
    res.status(200).json({ message: 'Festival supprimé avec succès.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la suppression du festival.' });
  }
};
