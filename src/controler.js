const service = require('./service.js');

    class UserController {
        constructor() {}
        getUserAll = async (request, response) => {
            try {
                const result = await service.getUserAll();
                response.send(result)
            } catch (e) {
                response.status(400).send({error:e.message})
            }
        }
        getUserById = async (request, response) => {
            try {
                const result = await service.getUserById(request);
                response.send(result);
            } catch (e) {
                response.status(400).send({error:e.message})
            }
        }
        addUser = async (request, response) => {
            try {
                const result = await service.addUser(request);
                response.status(201).send(result)
            } catch (e) {
                response.send({error:e.message})
                }
            }
        updateUserById = async (request, response) => {
            try {
                const result = await service.updateUserById(request);
                response.status(201).send(result)
            } catch (e) {
                response.send({error:e.message})
            }
        }
        deleteUser = async (request, response) => {
            try {
                const result = await service.deleteUser(request);
                response.status(200).send(result)
            } catch (e) {
                response.send({error:e.message})
            }
        }
        }
    // class PetsController {
    //     constructor() {}
    //     addPets = async (request, response) => {
    //         try {
    //             const result = await service.addPets(request);
    //             response.status(201).send(result)
    //         } catch (e) {
    //             response.send({error:e.message})
    //         }
    //     }
    // }
    module.exports = UserController;
        // PetsController

