const fs = require('fs');
const User = require('../model/user');

const getUserAll = () => {
    return User.find({})
};
const getUserById = async (request, response) => {
    return await User.findById(request.params.id);
};
const addUser = async function (request, response) {
    const user = new User(request.body);
    await user.save();
    return user;
};
const updateUserById = async function (request, response) {
    return await User.findByIdAndUpdate(request.params.id, request.body)
};
const deleteUser = async function (request, response){
    return await User.findByIdAndDelete(request.params.id, request.body)
};


module.exports = {
    getUserAll,
    getUserById,
    addUser,
    updateUserById,
    deleteUser
};
