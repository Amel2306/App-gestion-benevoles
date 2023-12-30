const express = require('express');
const router = express.Router();
const participerFestivaleController = require('../controllers/participerFestivaleController');

router.post('/', participerFestivaleController.createParticipation);

module.exports = router;
