const { Op } = require("sequelize");
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

exports.getZoneBenevoleByPost = async (postId) => {
  try {
    const zonesOfPost = await ZoneBenevole.findAll({
      where: {
        post_id: {
          [Op.eq]: postId
        }
      }
    })
    return zonesOfPost
  }catch (error) {
    throw new Error("Erreur lors de la récupération de les zones de ce post.");
  }
}

exports.createZoneBenevole = async (zoneData) => {
  try {
    const zoneExiste = await ZoneBenevole.findOne ({
      where: {
        nom_zb: {
          [Op.eq]: zoneData.nom_zb
        }
      }
    })
    const newZoneb = await ZoneBenevole.create(zoneData);
    return zoneExiste ? zoneExiste : newZoneb;
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



exports.deleteAllZB = async () => {
  try {
    await ZoneBenevole.destroy({
      where: {},
    });
    return "Toutes les zones ont été supprimées avec succès.";
  } catch (error) {
    throw new Error("Erreur lors de la suppression de toutes les zones.");
  }
};