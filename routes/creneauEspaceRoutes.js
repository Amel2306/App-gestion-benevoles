const express = require('express');
const router = express.Router();
const creneauEspaceController = require('../controllers/creneauEspaceController');

router.get('/:creneauId/:espaceId', creneauEspaceController.getCreneauEspaceById)
router.post('/', creneauEspaceController.createCreneauEspace);

module.exports = router;
