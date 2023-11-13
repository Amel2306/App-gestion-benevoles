const User = require ("../models/user")

exports.getAllUsers = async () => {
    try{
        const users = await User.findAll();
    return users;
    } catch (error) {
        throw new Error("Erreur lors de la récupération des users.");
    }
};

exports.createUser = async (userData) => {
    try{
        const newUser = await User.create(userData)
        return newUser;
    }
    catch(error){
        throw new Error("Erreur lors de la création de l'user.")
    }
}