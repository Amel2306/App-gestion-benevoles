const ZoneBenevole = require("../models/zonebenevole");

exports.getAllZonesBenevole = async () => {
  try {
    const zonesb = await ZoneBenevole.findAll();
    return zonesb;
  } catch (error) {
    throw new Error("Erreur lors de la récupération des zones.");
  }
};

exports.getZoneBenevoleById = async (zoneId) => {
  try {
    const zoneb = await ZoneBenevole.findByPk(zoneId);

    if (!zoneb) {
      throw new Error("Zone non trouvée.");
    }

    return zoneb;
  } catch (error) {
    throw new Error("Erreur lors de la récupération de la zone par ID.");
  }
};

exports.createZoneBenevole = async (zoneData) => {
  try {
    const newZoneb = await ZoneBenevole.create(zoneData);

    return newZoneb;
  } catch (error) {
    throw new Error("Erreur lors de la création de la zone.");
  }
};

exports.updateZoneBenevole = async (zoneId, updatedZoneData) => {
  try {
    const zoneb = await ZoneBenevole.findByPk(zoneId);
    if (!zoneb) {
      throw new Error("Zone non trouvée.");
    }

    await zoneb.update(updatedZoneData);
    return zoneb;
  } catch (error) {
    throw new Error("Erreur lors de la mise à jour de la zone.");
  }
};

exports.deleteZoneBenevole = async (zoneId) => {
  try {
    const zoneb = await ZoneBenevole.findByPk(zoneId);
    if (!zoneb) {
      throw new Error("Zone non trouvée.");
    }

    await zoneb.destroy();
    return "Zone supprimée avec succès.";
  } catch (error) {
    throw new Error("Erreur lors de la suppression de la zone.");
  }
};
