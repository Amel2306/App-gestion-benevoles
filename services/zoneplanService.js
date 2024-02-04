const ZonePlan = require("../models/zoneplan");
const { Op } = require("sequelize");


exports.getAllZonesPlan = async () => {
  try {
    const zonesp = await ZonePlan.findAll();
    return zonesp;
  } catch (error) {
    throw new Error("Erreur lors de la récupération des zones.");
  }
};

exports.getZonePlanById = async (zoneId) => {
  try {
    const zonep = await ZonePlan.findByPk(zoneId);

    if (!zonep) {
      throw new Error("Zone non trouvée.");
    }

    return zonep;
  } catch (error) {
    throw new Error("Erreur lors de la récupération de la zone par ID.");
  }
};

exports.createZonePlan = async (zoneData) => {
  try {
    const zoneExiste = await ZonePlan.findOne ({
      where: {
        nom_zp: {
          [Op.eq]: zoneData.nom_zp
        }
      }
    })
    const newZonep = await ZonePlan.create(zoneData);
    return zoneExiste ? zoneExiste : newZonep;
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

exports.deleteAllZP = async () => {
  try {
    await ZonePlan.destroy({
      where: {},
    });
    return "Toutes les zones ont été supprimées avec succès.";
  } catch (error) {
    throw new Error("Erreur lors de la suppression de toutes les zones.");
  }
};
