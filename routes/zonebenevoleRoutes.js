const express = require("express");
const zonebenevoleControllers = require ("../controllers/zonebenevoleController")

const router = express.Router()

router.post("/ajout/", zonebenevoleControllers.createZoneBenevole);
router.get("/:id", zonebenevoleControllers.getZoneBenevoleById);
router.delete("/:id", zonebenevoleControllers.deleteZoneBenevole);
router.put("/:id", zonebenevoleControllers.updateZoneBenevole);

module.exports = router;