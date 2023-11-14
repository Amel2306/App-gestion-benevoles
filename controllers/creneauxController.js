const creneauxServices = require("../services/creneauxService");

exports.getAllCreneaux = async (req, res) => {
  try {
    const creneaux = await creneauxServices.getAllCreneaux();
    res.json(creneaux);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des créneaux", error });
  }
};

exports.getCreneauxById = async (req, res) => {
  try {
    const creneauxId = req.params.id;
    const creneaux = await creneauxServices.getCreneauxById(creneauxId);

    res.json(creneaux);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des créneaux par ID", error });
  }
};

exports.createCreneaux = async (req, res) => {
  try {
    const creneauxData = req.body;
    const newCreneaux = await creneauxServices.createCreneaux(creneauxData);

    res.status(201).json(newCreneaux);
  } catch (error) {
    res.status(400).json({ message: "Erreur lors de la création des créneaux", error });
  }
};

exports.updateCreneaux = async (req, res) => {
  try {
    const creneauxId = req.params.id;
    const updatedCreneauxData = req.body;

    const updatedCreneaux = await creneauxServices.updateCreneaux(creneauxId, updatedCreneauxData);
    res.json(updatedCreneaux);
  } catch (error) {
    res.status(400).json({ message: "Erreur lors de la mise à jour des créneaux", error });
  }
};

exports.deleteCreneaux = async (req, res) => {
  try {
    const creneauxId = req.params.id;
    const result = await creneauxServices.deleteCreneaux(creneauxId);

    res.json({ message: result.message });
  } catch (error) {
    res.status(400).json({ message: "Erreur lors de la suppression des créneaux", error });
  }
};
