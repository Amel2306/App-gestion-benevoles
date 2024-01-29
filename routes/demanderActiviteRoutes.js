const express = require('express');
const router = express.Router();
const demanderActiviteController = require('../controllers/demanderActiviteController');

router.post('/', demanderActiviteController.createDemanderActivite);
router.put('/accepte/:id', demanderActiviteController.accpeterDemande);
router.get('/user/:userId', demanderActiviteController.getDemandeByUsers);

module.exports = router;
