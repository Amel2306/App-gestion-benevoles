const express = require("express");
const creneauxControllers = require("../controllers/creneauxController"); 

const router = express.Router();

router.get("/", creneauxControllers.getAllCreneaux);
router.get("/:id", creneauxControllers.getCreneauxById);
router.post("/", creneauxControllers.createCreneaux);
router.put("/:id", creneauxControllers.updateCreneaux);
router.delete("/:id", creneauxControllers.deleteCreneaux);

module.exports = router;
