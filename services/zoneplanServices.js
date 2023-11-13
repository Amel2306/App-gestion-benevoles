const ZonePlan = require("../models/zoneplan"); 

exports.getAllZonesPlan = async () => {
  try {
    const zonesp = await ZonePlan.findAll();
    return zonesp;
  } catch (error) {
    throw new Error("Erreur lors de la récupération des zones.");
  }
};

exports.createZonePlan = async (zoneData) => {
  try {
    const newZonep = await ZonePlan.create(zoneData);
    return newZonep;
  } catch (error) {
    throw new Error("Erreur lors de la création de la zone.");
  }
};

exports.updateZonePlan = async (zoneId, updatedZoneData) => {
  try {
    const zonep = await ZonePlan.findByPk(zoneId);
    if (!zonep) {
      throw new Error("Zone non trouvée.");
    }

    await zonep.update(updatedZoneData);
    return zonep;
  } catch (error) {
    throw new Error("Erreur lors de la mise à jour de la zone.");
  }
};

exports.deleteZonePlan = async (zoneId) => {
  try {
    const zonep = await ZonePlan.findByPk(zoneId);
    if (!zonep) {
      throw new Error("Zone non trouvée.");
    }

    await zonep.destroy();
    return "Zone supprimée avec succès.";
  } catch (error) {
    throw new Error("Erreur lors de la suppression de la zone.");
  }
};
