const express = require('express');
const PetsController = require('../controllers/pet_controller');
const pet_controller = new PetsController();


const pet_router = new express.Router();

pet_router.get('/', pet_controller.getPets);
pet_router.post('/', pet_controller.addPet);



module.exports = pet_router;