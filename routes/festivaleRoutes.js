const express = require("express");
const festivaleController = require('../controllers/festivaleController');

const router = express.Router();

// Routes pour les opérations CRUD
router.get('/', festivaleController.getAllFestivales);
router.get('/:id', festivaleController.getFestivaleById);
router.post('/', festivaleController.createFestivale);
router.put('/:id', festivaleController.updateFestivale);
router.delete('/:id', festivaleController.deleteFestivale);

module.exports = router;
