const express = require('express');
const associationController = require('../controllers/associationController');

const router = express.Router();

// Routes pour les opérations CRUD
router.get('/', associationController.getAllAssociations);
router.get('/:id', associationController.getAssociationById);
router.post('/', associationController.createAssociation);
router.put('/:id', associationController.updateAssociation);
router.delete('/:id', associationController.deleteAssociation);

module.exports = router;
