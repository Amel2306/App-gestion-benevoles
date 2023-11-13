const express = require("express");
const zoneplanControllers = require ("../controllers/zoneplanControllers")

const router = express.Router()

router.get("/", zoneplanControllers.getAllZonesPlan);
router.post("/", zoneplanControllers.createZonePlan);
router.delete("/:id", zoneplanControllers.deleteZonePlan);
router.put("/:id", zoneplanControllers.updateZonePlan);

module.exports = router;