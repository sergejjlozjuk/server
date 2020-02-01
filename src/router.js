const express = require('express');
const UserController = require('./controler.js');
const user_controller = new UserController();
const PetsController = require('./controler.js');
// const pets_controller = new PetsController();

const router = new express.Router();

router.get('/:id', user_controller.getUserById);
router.get('/', user_controller.getUserAll);
router.post('/', user_controller.addUser);
router.put('/:id', user_controller.updateUserById);
router.delete('/:id', user_controller.deleteUser);
// router.post('/', pets_controller.addPets);
module.exports = router;