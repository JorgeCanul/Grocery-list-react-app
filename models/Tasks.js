const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const TaksSchema = new Schema({
    text: {
        type: String,
        required: true
    },
    day: {
        type: String,
        required: true
    },
    reminder: {
        type: Boolean
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Task = mongoose.model('task', TaksSchema);