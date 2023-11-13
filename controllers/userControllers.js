const userServices = require("../services/userServices");

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
        const {
            nom,
            prenom,
            email,
            numero_tel,
            pseudo,
            role,
            password,
        } = req.body;
        const userData = {
            nom,
            prenom,
            email,
            numero_tel,
            pseudo,
            role,
            password,
        }
        const newUser = await userServices.createUser(userData);
        res.status(201).json(newUser);
    } catch(error) {
        res
        .status(400)
        .json({ message: "Error creation user dans controllers", error });  
    }
}