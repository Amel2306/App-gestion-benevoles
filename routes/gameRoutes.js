const express = require("express");
const gameControllers = require ("../controllers/gameController")

const router = express.Router()

router.get("/", gameControllers.getAllGames);
router.post("/", gameControllers.createGame);
router.delete("/:id", gameControllers.deleteGame);
router.put("/:id", gameControllers.updateGame);

module.exports = router;