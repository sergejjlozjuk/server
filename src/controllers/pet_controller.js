const service = require('../service/pet_service');


class PetsController {
    constructor() {
    }
    getPets = async  (request, response) => {
        response.send(await service.getPets());
    };
    addPet = async  (request, response) => {
        try {
            const result = await service.addPet(request);
            response.status(201).send(result);
        } catch (e) {
            response.send({error: e.message})
        }
    }
}

module.exports = PetsController;