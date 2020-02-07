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

const  getUserWithAllPets = async function () {
    return User.find({})
};

const addPetForUser = async function (request, response) {
try {
    return  await User.aggregate([{
            $lookup: {
                from: "pets",
                localField: "pet",
                foreignField: "name",
                as: "pets"
            }}])
} catch (e) {
    throw e
}
};
module.exports = {
    getUserAll,
    getUserById,
    addUser,
    updateUserById,
    deleteUser,
    getUserWithAllPets,
    addPetForUser,
};


