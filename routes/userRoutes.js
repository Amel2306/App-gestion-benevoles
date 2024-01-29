const express = require("express");
const userControllers = require ("../controllers/userController")

const router = express.Router()

router.get("/", userControllers.getAllUsers);
router.post("/", userControllers.createUser);
router.put("/:userId", userControllers.updateUser);

module.exports = router;