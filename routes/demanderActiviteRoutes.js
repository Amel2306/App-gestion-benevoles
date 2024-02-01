const express = require('express');
const router = express.Router();
const demanderActiviteController = require('../controllers/demanderActiviteController');

router.post('/', demanderActiviteController.createDemanderActivite);
router.put('/accepte/:id/:festivalId', demanderActiviteController.accpeterDemande);
router.get('/user/:userId', demanderActiviteController.getDemandeByUsers);
router.get('/creneau/:creneauId', demanderActiviteController.getDemandeByCreneau);
router.get('/zone/:zonebenevoleId', demanderActiviteController.getDemandeByZoneBenevole);
router.get('/acceptes',  demanderActiviteController.getDemandeAcceptee)
router.get('/zoneCreneau/:zoneId/:creneauId',  demanderActiviteController.getDemandeByZoneCreneau)
router.get('/ZPCreneau/:zoneId/:creneauId',  demanderActiviteController.getDemandeByZPCreneauAccepte)
router.get('/postCreneau/:postId/:creneauId',  demanderActiviteController.getDemandeByPostCreneauAccepte)
router.get('/acceptes/zoneCreneau/:zoneId/:creneauId',  demanderActiviteController.getDemandeByZoneCreneauAccepte)


module.exports = router;

