const mongoose = require('mongoose');

const BoardSchema = new mongoose.Schema({
    title :{
        type: String,
        required: true
    },
    owner :{
        type: String,
        required: true
    },
    createdDate :{
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: Date.now
    }
});

const Board = mongoose.model('Board', BoardSchema);

module.exports = Board;