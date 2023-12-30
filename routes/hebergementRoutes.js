const express = require('express');
const router = express.Router();
const hebergementController = require('../controllers/hebergementController');

router.post('/', hebergementController.createHebergement);

module.exports = router;
