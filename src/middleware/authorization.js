const jwt = require('jsonwebtoken');
const User = require('../model/user');

const auth = async (request, response, next) => {
    try {
        const token = request.header('Authorization').replace('Bearer ', '');
        const decoded  = jwt.verify(token, 'foo');
        const user = await User.findOne({_id: decoded});
        if (!user) {
            throw new Error()
        }
        request.token = token;
        request.user = user;
        next()
    } catch (e) {
        response.status(401).send('авторизуйтесь пожалусйта')
    }
};

module.exports = auth;