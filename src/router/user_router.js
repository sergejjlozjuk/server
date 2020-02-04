const express = require('express');
const UserController = require('../controllers/user_controller');
const user_controller = new UserController();

const user_router = new express.Router();

user_router.get('/', user_controller.getUserAll);
user_router.get('/:id', user_controller.getUserById);
user_router.post('/', user_controller.addUser);
user_router.put('/:id', user_controller.updateUserById);
user_router.delete('/:id', user_controller.deleteUser);
user_router.get('/pets', user_controller.getUserPets);




module.exports = user_router;