const express = require('express');
const  port = 3000;
const app = express();
const router = require('./router.js');
const User = require('./model/user');
require('./db');

// Сервер экспресс
// CRUD на сущность юзера
// /users GET - получение всех юзеров
// /users POST - создание юзера
// /users/:id GET - получение юзера по айди
// /users/:id PUT - update user by id
// /users/:id DELETE - delete user by id

app.use(express.json());
app.use('/users', router);
app.use('/pets', router);





app.listen(port, () => console.log('сервер запущен'));