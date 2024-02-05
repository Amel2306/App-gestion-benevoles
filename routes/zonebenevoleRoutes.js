const express = require("express");
const zonebenevoleControllers = require ("../controllers/zonebenevoleController")

const router = express.Router()

router.get("/", zonebenevoleControllers.getAllZonesBenevole);
router.get("/:id", zonebenevoleControllers.getZoneBenevoleById);
router.get("/post/:postId", zonebenevoleControllers.getZoneBenevoleByPost);
router.post("/", zonebenevoleControllers.createZoneBenevole);
router.delete("/:id", zonebenevoleControllers.deleteZoneBenevole);
router.delete("/", zonebenevoleControllers.deleteAllZB);
router.put("/nettoyage", zonebenevoleControllers.nettoyageZB)
router.put("/modifier/:id", zonebenevoleControllers.updateZoneBenevole);


module.exports = router;