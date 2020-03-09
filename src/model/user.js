const mongoose = require('mongoose');
const {Schema} = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
    login: {
        type:String,
        required: true,
        unique: true
    },
    password: {
        type:String,
        required: true,
        unique: true,
    },
    name: {
        type: String,
        required: false
    },
    surname: {
        type: String,
        required: false
    },
    gender: {
        type: String,
        required: false
    },
    title: {
        type: String,
        required:false
    },
    pet: {
        type: String,
        required:false
    },
    tokens: [{
        token: {
            type: String,
            required: true
        }
    }],
});
UserSchema.statics.findByCredentials = async function (login, password)  {
    const user = await User.findOne({login});
    if(!user) {
        throw new Error('такого юзера не существует')
    }
    const authorization = await bcrypt.compare(password, user.password);
    if (!authorization){
        throw new Error('пароль неверный')
    }
   return user
};
UserSchema.pre('save', async function (next)  {
    const user = this;
    if (user.isModified('password')){
        user.password = await bcrypt.hash(user.password,1)
    }
    next()
});
UserSchema.methods.generateAutoToken = async function () {
    const user = this;
    const token = jwt.sign(user._id.toString(), 'foo');
    user.tokens = {token};
    user.save();
};


const User = mongoose.model('User', UserSchema);
module.exports = User;

