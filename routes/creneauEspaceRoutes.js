const express = require('express');
const router = express.Router();
const creneauEspaceController = require('../controllers/creneauEspaceController');

router.get('/:creneauId/:espaceId', creneauEspaceController.getCreneauEspaceById)
router.get('/post/:postId/:creneauId', creneauEspaceController.getCreneauEspaceByPost );
router.post('/', creneauEspaceController.createCreneauEspace);

module.exports = router;
