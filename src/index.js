const express = require('express');
const port = 3000;
const app = express();
const user_router = require('./router/user_router');
const pet_router = require('./router/pet_router');
require('./db');




app.use(express.json());
app.use('/users', user_router);
app.use('/pets', pet_router);






app.listen(port, () => console.log('сервер запущен ' + port));