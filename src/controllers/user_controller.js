const service = require('../service/user_service');

class UserController {
    constructor() {
    }

    getUserAll = async (request, response) => {
        response.send(await service.getUserAll());
    };
    getUserById = async (request, response) => {
        try {
            const result = await service.getUserById(request);
            response.send(result);
        } catch (e) {
            response.sendStatus(400).send({error: e.message})
        }
    };
    addUser = async (request, response) => {
        try {
            const result = await service.addUser(request);
            response.status(201).send(result)
        } catch (e) {
            response.send({error: e.message})
        }
    };
    updateUserById = async (request, response) => {
        try {
            const result = await service.updateUserById(request);
            response.status(201).send(result)
        } catch (e) {
            response.send({error: e.message})
        }
    };
    deleteUser = async (request, response) => {
        try {
            const result = await service.deleteUser(request);
            response.status(200).send(result)
        } catch (e) {
            response.send({error: e.message})
        }
    };

    getUserWithAllPets = async (request, response) => {
        response.send( await service.getUserWithAllPets())
    };

    addPetForUser = async (request, response) => {
        try {
            const result = await  service.addPetForUser(request);
            response.status(201).send(result);
        } catch (e) {
            response.send({error: e.message})
        }
    }
}

module.exports = UserController;


