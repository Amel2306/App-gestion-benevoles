const activityServices = require("../services/activityService");

exports.getAllActivities = async (req, res) => {
  try {
    const activities = await activityServices.getAllActivities();
    res.json(activities);
  } catch (error) {
    res.status(500).json({ message: "Error fetching activities", error: error.message });
  }
};

exports.getActivityById = async (req, res) => {
  try {
    const activityId = req.params.id;
    const activity = await activityServices.getActivityById(activityId);

    res.json(activity);
  } catch (error) {
    res.status(500).json({ message: "Error fetching activity", error: error.message });
  }
};

exports.createActivity = async (req, res) => {
  try {
    const activityData = req.body;
    const newActivity = await activityServices.createActivity(activityData);

    res.status(201).json(newActivity);
  } catch (error) {
    res.status(400).json({ message: "Error creating activity", error: error.message });
  }
};

exports.updateActivity = async (req, res) => {
  try {
    const activityId = req.params.id;
    const updatedActivityData = req.body;

    const updatedActivity = await activityServices.updateActivity(activityId, updatedActivityData);
    res.json(updatedActivity);
  } catch (error) {
    res.status(400).json({ message: "Error updating activity", error: error.message });
  }
};

exports.deleteActivity = async (req, res) => {
  try {
    const activityId = req.params.id;
    const result = await activityServices.deleteActivity(activityId);

    res.json({ message: result.message });
  } catch (error) {
    res.status(400).json({ message: "Error deleting activity", error: error.message });
  }
};
