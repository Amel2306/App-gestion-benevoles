const express = require("express");
const userControllers = require ("../controllers/userController")

const router = express.Router()

router.get("/", userControllers.getAllUsers);
router.get("/:id", userControllers.getUserById);
router.post("/", userControllers.createUser);
router.put("/:userId", userControllers.updateUser);
router.delete("/:id", userControllers.deleteUser);

module.exports = router;