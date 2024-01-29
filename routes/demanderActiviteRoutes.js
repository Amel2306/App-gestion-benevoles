const express = require('express');
const router = express.Router();
const demanderActiviteController = require('../controllers/demanderActiviteController');

router.post('/', demanderActiviteController.createDemanderActivite);
router.put('/accepte/:id', demanderActiviteController.accpeterDemande);

module.exports = router;
