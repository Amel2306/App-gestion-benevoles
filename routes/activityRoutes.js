const express = require("express");
const activityControllers = require("../controllers/activityController");

const router = express.Router();

router.get("/", activityControllers.getAllActivities);
router.get("/:id", activityControllers.getActivityById);
router.post("/", activityControllers.createActivity);
router.put("/:id", activityControllers.updateActivity);
router.delete("/:id", activityControllers.deleteActivity);

module.exports = router;
