const zonePlanServices = require("../services/zoneplanService");

exports.getAllZonesPlan = async (req, res) => {
  try {
    const zonesPlan = await zonePlanServices.getAllZonesPlan();
    res.json(zonesPlan);
  } catch (error) {
    res.status(500).json({ message: "Erreur lors de la récupération des zones plan.", error });
  }
};

exports.createZonePlan = async (req, res) => {
  try {
    const { nom_zp } = req.body;
    const zonePlanData = { nom_zp };

    const newZonePlan = await zonePlanServices.createZonePlan(zonePlanData);
    res.status(201).json(newZonePlan);
  } catch (error) {
    res.status(400).json({ message: "Erreur lors de la création de la zone.", error });
  }
};

exports.updateZonePlan = async (req, res) => {
  try {
    const zonePlanId = req.params.id;
    const updatedZonePlanData = req.body;

    const updatedZonePlan = await zonePlanServices.updateZonePlan(zonePlanId, updatedZonePlanData);
    res.json(updatedZonePlan);
  } catch (error) {
    res.status(400).json({ message: "Erreur lors de la mise à jour de la zone.", error });
  }
};

exports.deleteZonePlan = async (req, res) => {
  try {
    const zonePlanId = req.params.id;
    const result = await zonePlanServices.deleteZonePlan(zonePlanId);

    res.json({ message: result });
  } catch (error) {
    res.status(400).json({ message: "Erreur lors de la suppression de la zone.", error });
  }
};
