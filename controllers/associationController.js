const associationService = require('../services/associationService');

exports.getAllAssociations = async (req, res) => {
  try {
    const associations = await associationService.getAllAssociations();
    res.status(200).json(associations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération des associations.' });
  }
};

exports.getAssociationById = async (req, res) => {
  const { id } = req.params;

  try {
    const association = await associationService.getAssociationById(id);
    res.status(200).json(association);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la récupération de l\'association par ID.' });
  }
};

exports.createAssociation = async (req, res) => {
  const associationData = req.body;

  try {
    const newAssociation = await associationService.createAssociation(associationData);
    res.status(201).json(newAssociation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la création de l\'association.' });
  }
};

exports.updateAssociation = async (req, res) => {
  const { id } = req.params;
  const updatedAssociationData = req.body;

  try {
    const updatedAssociation = await associationService.updateAssociation(id, updatedAssociationData);
    res.status(200).json(updatedAssociation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la mise à jour de l\'association.' });
  }
};

exports.deleteAssociation = async (req, res) => {
  const { id } = req.params;

  try {
    await associationService.deleteAssociation(id);
    res.status(200).json({ message: 'Association supprimée avec succès.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Erreur lors de la suppression de l\'association.' });
  }
};
