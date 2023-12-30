const express = require('express');
const router = express.Router();
const creneauEspaceController = require('../controllers/creneauEspaceController');

router.post('/', creneauEspaceController.createCreneauEspace);

module.exports = router;
