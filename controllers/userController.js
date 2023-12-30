const userServices = require("../services/userService");

exports.getAllUsers = async (req, res) => {
    try {
      const users = await userServices.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "Error lors de la récupération des users", error });
    }
};

exports.createUser = async (req, res) => {
    try {
        const userData = req.body
        const newUser = await userServices.createUser(userData);
        res.status(201).json(newUser);
    } catch(error) {
        res
        .status(400)
        .json({ message: "Error creation user dans controllers", error });  
    }
}