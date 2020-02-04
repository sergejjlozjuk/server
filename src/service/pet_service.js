const Pet = require('../model/pet');

const  getPets = () => {
    return Pet.find({})
};
const addPet = async (request, response) => {
    const pet = new Pet(request.body);
    await pet.save();
    return pet;
};

module.exports = {
    getPets,
    addPet
};