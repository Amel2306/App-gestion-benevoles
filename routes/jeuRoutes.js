const express = require("express");
const gameControllers = require ("../controllers/jeuController")

const router = express.Router()

router.get("/", gameControllers.getAllJeux);
router.post("/", gameControllers.createJeu);
router.delete("/:id", gameControllers.deleteJeu);
router.put("/:id", gameControllers.updateJeu);

module.exports = router;