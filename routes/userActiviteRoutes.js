const express = require('express');
const userActiviteController = require('../controllers/userActiviteController');

const router = express.Router();

router.get('/', userActiviteController.getAllUserActivites);
router.post('/', userActiviteController.createUserActivite);
router.get('/:id', userActiviteController.getUserActiviteById);
router.put('/:id', userActiviteController.updateUserActivite);
router.delete('/:id', userActiviteController.deleteUserActivite);

module.exports = router;
