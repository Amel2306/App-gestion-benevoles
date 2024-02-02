const express = require('express');
const router = express.Router();
const hebergementController = require('../controllers/hebergementController');

router.post('/', hebergementController.createHebergement);
router.get('/', hebergementController.getAllHebergements);
router.get('/disponible', hebergementController.getHebergementDispo);
router.get('/:id', hebergementController.getHebergementById);
router.get('/user/:userId', hebergementController.getHebergementByUser);
router.put('/:id', hebergementController.updateHebergement);
router.put('/invisible/:id', hebergementController.rendreInvisible);
router.put('/visible/:id', hebergementController.rendreVisible);
router.delete('/:id', hebergementController.deleteHebergement);

module.exports = router;
