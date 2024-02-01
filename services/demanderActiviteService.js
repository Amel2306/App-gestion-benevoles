const DemanderActivite = require('../models/demanderActivite');
const { Op } = require('sequelize');
const UserService = require('./userService');
const ParticiperFestivaleService = require('./participerFestivaleService');
const Zonebenevole = require('../models/zonebenevole');

exports.createDemanderActivite = async (demanderActiviteData) => {
  try {
    const newDemanderActivite = await DemanderActivite.create(demanderActiviteData);
    return newDemanderActivite;
  } catch (error) {
    throw new Error('Erreur lors de la création de demander_activite dans le service');
  }
};

exports.getDemandeAcceptee = async () => {
  try {
    const allDemandes = await DemanderActivite.findAll({
      where: {
        accepte: {
          [Op.eq]: 1
        }
      }
    });
    return allDemandes
  }
  catch (error) {
    throw new Error('Erreur lors de la récupération de ces demande d\'activite dans le service');
  }
}

exports.accpeterDemande = async (demandeId, festivalId) => {
  try {
    const demandeActivite = await DemanderActivite.findByPk(demandeId);
    demandeActivite.accepte = 1;
    await demandeActivite.save();

    const otherDemandeActivites = await DemanderActivite.findAll({
      where: {
        id: {
          [Op.not]: demandeId
        }
      }
    });

    if (otherDemandeActivites) {
      for (const otherDemandeActivite of otherDemandeActivites) {
        otherDemandeActivite.archive = 1;
        await otherDemandeActivite.save();
      }
    }

    const userUpdated = await UserService.updateUser(demandeActivite.dataValues.user_id, {role: "bénévole"})
    const userId = demandeActivite.dataValues.user_id;
    const participationFestivale = await ParticiperFestivaleService.createParticipation( {user_id: userId,festivale_id: festivalId} )
  } catch (error) {
    throw new Error('Erreur lors de l\'acceptation de cette demande d\'activite dans le service');
  }
}

exports.getDemandeByUsers = async (userId) => {
  try {
    const allDemandes = await DemanderActivite.findAll ({
      where: {
        user_id: {
          [Op.eq]: userId
        }
      }
    })
    return allDemandes
  }
  catch (err) {
    throw new Error ('Aucune demande trouvée pour cet utilisateur')
  }
}

exports.getDemandeByCreneau = async (creneauId) => {
  try {
    const allDemandes = await DemanderActivite.findAll ({
      where: {
        creneau_id: {
          [Op.eq]: creneauId
        }
      }
    })
    return allDemandes
  }
  catch (err) {
    throw new Error ('Aucune demande trouvée pour ce créneau')
  }
}


exports.getDemandeByZoneBenevole = async (zonebenevoleId) => {
  try {
    const allDemandes = await DemanderActivite.findAll ({
      where: {
        zonebenevole_id: {
          [Op.eq]: zonebenevoleId
        }
      }
    })
    return allDemandes
  }
  catch (err) {
    throw new Error ('Aucune demande trouvée pour cet espace')
  }
}

exports.getDemandeByZoneCreneau = async (zoneId, creneauId) => {
    try {
      const allDemandes = await DemanderActivite.findAll ({
        where: {
          zonebenevole_id: {
            [Op.eq]: zoneId
          },
          creneau_id: {
            [Op.eq]: creneauId
          }
        }
      })
      return allDemandes
    }
    catch (err) {
      throw new Error ('Aucune demande trouvée pour cet espace')
    }
}

exports.getDemandeByZoneCreneauAccepte = async (zoneId, creneauId) => {
  try {
    const allDemandes = await DemanderActivite.findAll ({
      where: {
        zonebenevole_id: {
          [Op.eq]: zoneId
        },
        creneau_id: {
          [Op.eq]: creneauId
        },
        accepte: {
          [Op.eq]: 1
        }
      }
    })
    return allDemandes
  }
  catch (err) {
    throw new Error ('Aucune demande trouvée pour cet espace')
  }
}

exports.getDemandeByZPCreneauAccepte = async (zoneId, creneauId) => {
  try {
    const allZoneBenevoles = await Zonebenevole.findAll( {
      where: {
        zone_plan_id: {
          [Op.eq]: zoneId
        }
      }
    })
    const tabDemande = [];
    for (const zoneBen of allZoneBenevoles) {
      const allDemandes = await DemanderActivite.findAll ({
        where: {
          zonebenevole_id: {
            [Op.eq]: zoneBen.id
          },
          creneau_id: {
            [Op.eq]: creneauId
          },
          accepte: {
            [Op.eq]: 1
          }
        }
      })
      tabDemande.push(allDemandes)
    }
    console.log(tabDemande)
    return tabDemande
  }
  catch (err) {
    throw new Error ('Aucune demande trouvée pour cet espace')
  }
}

exports.getDemandeByPostCreneauAccepte = async (postId, creneauId) => {
  try {
    const allZoneBenevoles = await Zonebenevole.findAll( {
      where: {
        post_id: {
          [Op.eq]: postId
        }
      }
    })
    const tabDemande = [];
    for (const zoneBen of allZoneBenevoles) {
      const allDemandes = await DemanderActivite.findAll ({
        where: {
          zonebenevole_id: {
            [Op.eq]: zoneBen.id
          },
          creneau_id: {
            [Op.eq]: creneauId
          },
          accepte: {
            [Op.eq]: 1
          }
        }
      })
      tabDemande.push(allDemandes)
    }
    console.log(tabDemande)
    return tabDemande
  }
  catch (err) {
    throw new Error ('Aucune demande trouvée pour cet espace')
  }
}
