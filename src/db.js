const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://127.0.0.1:27017/Users-manager', {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

