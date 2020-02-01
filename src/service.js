const fs = require('fs');
const User = require('./model/user.js');
const Pet = require('./model/user');

const getUserAll = async function(){
    return await User.find({})
};
const getUserById = async function (request, response){
    return await User.findById(request.params.id);
};
const addUser = async function (request, response) {
    const user = new User(request.body);
    await user.save();
};
const updateUserById = async function (request, response) {
    return await User.findByIdAndUpdate(request.params.id, request.body)
};
const deleteUser = async function (request, response){
    return await User.findByIdAndDelete(request.params.id, request.body)
};
const addPets = async function (request, response) {
    const pet = new Pet(request.body);
    await pet.save()
}

module.exports = {
    getUserAll,
    getUserById,
    addUser,
    updateUserById,
    deleteUser,
    addPets
};