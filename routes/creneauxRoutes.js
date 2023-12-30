const express = require("express");
const creneauControllers = require("../controllers/creneauController"); 

const router = express.Router();

router.get("/", creneauControllers.getAllCreneaux);
router.get("/:id", creneauControllers.getCreneauxById);
router.post("/", creneauControllers.createCreneaux);
router.put("/:id", creneauControllers.updateCreneaux);
router.delete("/:id", creneauControllers.deleteCreneaux);

module.exports = router;
