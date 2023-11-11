const User = require ("../models/user")

exports.getAllUsers = async () => {
    const users = await User.findAll();
    return users;
};

exports.createUser = async (userData) => {
    const newUser = await User.create(userData)
    return newUser;
}