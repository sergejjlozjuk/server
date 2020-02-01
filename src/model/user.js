const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    surname: {
        type: String,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required:true
    },
    id: {
        type:String,
        value: this._id,
    }
});

const PetsSchema = new mongoose.Schema ({
    name: {
        type:String
    },
    size: {
        type:String
    }
});

const Pet = mongoose.model('Pet', PetsSchema);

const User = mongoose.model('User', UserSchema);
module.exports = {
    User,
    Pet
}