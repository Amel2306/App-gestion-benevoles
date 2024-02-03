const userServices = require("../services/userService");

exports.getAllUsers = async (req, res) => {
    try {
      const users = await userServices.getAllUsers();
      res.json(users);
    } catch (error) {
      res.status(500).json({ message: "Error lors de la récupération des users", error });
    }
};

exports.getUserById = async (req, res) => {
  try {
    const {id} = req.params
    const user = await userServices.getUserById(id)
    res.status(201).json(user)
  }
  catch(error) {
    res
    .status(400)
    .json({ message: "Error récupération user dans controllers", error });  
  }
}

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

exports.updateUser = async (req, res) => {
  try {
    const userData = req.body
    const {userId} = req.params
    const userUpdated = await userServices.updateUser(userId, userData)
    res.status(201).json(userUpdated)
  }
  catch(error) {
    res
    .status(400)
    .json({ message: "Error modification user dans controllers", error });  
  }
}

exports.deleteUser = async (req, res) => {
  try {
    console.log("je rentre")
    const userId = req.params.id
    const userUpdated = await userServices.deleteUser(userId)
    res.status(201).json({message : userUpdated})
  }
  catch(error) {
    res
    .status(400)
    .json({ message: "Impossible de supprimer l'utilisateur", error });  
  }
}