const userActiviteService = require('../services/userActiviteService');

exports.getAllUserActivites = async (req, res) => {
  try {
    const userActivites = await userActiviteService.getAllUserActivites();
    res.status(200).json(userActivites);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des UserActivites.' });
  }
};

exports.createUserActivite = async (req, res) => {
  const userActiviteData = req.body;

  try {
    const newUserActivite = await userActiviteService.createUserActivite(userActiviteData);
    res.status(201).json(newUserActivite);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création de UserActivite.' });
  }
};

exports.getUserActiviteById = async (req, res) => {
  const { id } = req.params;

  try {
    const userActivite = await userActiviteService.getUserActiviteById(id);
    res.status(200).json(userActivite);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération de UserActivite par ID.' });
  }
};

exports.updateUserActivite = async (req, res) => {
  const { id } = req.params;
  const updatedUserActiviteData = req.body;

  try {
    const updatedUserActivite = await userActiviteService.updateUserActivite(id, updatedUserActiviteData);
    res.status(200).json(updatedUserActivite);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour de UserActivite.' });
  }
};

exports.deleteUserActivite = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await userActiviteService.deleteUserActivite(id);
    res.status(200).json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la suppression de UserActivite.' });
  }
};
