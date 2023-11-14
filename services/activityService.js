const Activity = require("../models/activity");

exports.getAllActivities = async () => {
  try {
    const activities = await Activity.findAll();
    return activities;
  } catch (error) {
    console.error("Error fetching activities:", error);
    throw new Error("Error fetching activities.");
  }
};

exports.getActivityById = async (activityId) => {
  try {
    const activity = await Activity.findByPk(activityId);

    if (!activity) {
      throw new Error("Activity not found.");
    }

    return activity;
  } catch (error) {
    console.error("Error fetching activity by ID:", error);
    throw new Error("Error fetching activity by ID.");
  }
};

exports.createActivity = async (activityData) => {
  try {
    const newActivity = await Activity.create(activityData);
    return newActivity;
  } catch (error) {
    console.error("Error creating activity:", error);
    throw new Error("Error creating activity.");
  }
};

exports.updateActivity = async (activityId, updatedActivityData) => {
  try {
    const activity = await Activity.findByPk(activityId);

    if (!activity) {
      throw new Error("Activity not found.");
    }

    await activity.update(updatedActivityData);
    return activity;
  } catch (error) {
    console.error("Error updating activity:", error);
    throw new Error("Error updating activity.");
  }
};

exports.deleteActivity = async (activityId) => {
  try {
    const activity = await Activity.findByPk(activityId);

    if (!activity) {
      throw new Error("Activity not found.");
    }

    await activity.destroy();
    return { message: "Activity deleted successfully." };
  } catch (error) {
    console.error("Error deleting activity:", error);
    throw new Error("Error deleting activity.");
  }
};
