const express = require('express');
const router = express.Router();
const demanderActiviteController = require('../controllers/demanderActiviteController');

router.post('/', demanderActiviteController.createDemanderActivite);
router.put('/accepte/:id', demanderActiviteController.accpeterDemande);
router.get('/user/:userId', demanderActiviteController.getDemandeByUsers);
router.get('/creneau/:creneauId', demanderActiviteController.getDemandeByCreneau);
router.get('/zone/:zonebenevoleId', demanderActiviteController.getDemandeByZoneBenevole);
router.get('/accepte',  demanderActiviteController.getDemandeAcceptee)

module.exports = router;

