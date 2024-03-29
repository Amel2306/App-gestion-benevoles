const User = require ("../models/user")

exports.getAllUsers = async () => {
    try{
        const users = await User.findAll();
        return users;
    } catch (error) {
        throw new Error("Erreur lors de la récupération des users.");
    }
};


exports.getUserById = async (userId) => {
    try {
        const user = await User.findByPk(userId);
        if (!user) {
        throw new Error("User non trouvé.");

        }
        return user;
    }
    catch (error) {
        throw new Error("Erreur lors de la mise à jour du user.");
    }
}

exports.createUser = async (userData) => {
    try{
        const newUser = await User.create(userData)
        return newUser;
    }
    catch(error){
        throw new Error("Erreur lors de la création de l'user.")
    }
}

exports.updateUser = async (userId, dataUser) => {
    try {
        const user = await User.findByPk(userId);
        if (!user) {
        throw new Error("User non trouvé.");

        }
        await user.update(dataUser);
        return user;
    }
    catch (error) {
        throw new Error("Erreur lors de la mise à jour du user.");
    }
}

exports.deleteUser = async (userId) => {
    try {
        const user = await User.findByPk(userId)
        await user.destroy()
        return "Utilisateur bien supprimé"
    }
    catch (error) {
        throw new Error ("Impossible de supprimer l'utilisateur")
    }
}