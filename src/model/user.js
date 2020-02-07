const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const UserSchema = new mongoose.Schema({
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
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;
