const mongoose = require('mongoose');
const {Schema} = require('mongoose');




const PetsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    users: [{
        type: Schema.ObjectId,
        ref: 'User'
    }],
    user: {
        type: String,
        required: false,
    }
});

const Pet = mongoose.model('Pet', PetsSchema);

module.exports = Pet;

