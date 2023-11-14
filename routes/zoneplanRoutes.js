const express = require("express");
const zoneplanControllers = require ("../controllers/zoneplanController")

const router = express.Router()

router.get("/", zoneplanControllers.getAllZonesPlan);
router.get("/:id", zoneplanControllers.getZonePlanById)
router.post("/", zoneplanControllers.createZonePlan);
router.delete("/:id", zoneplanControllers.deleteZonePlan);
router.put("/:id", zoneplanControllers.updateZonePlan);

module.exports = router;