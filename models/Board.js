const mongoose = require('mongoose');

const BoardSchema = new mongoose.Schema({


});

const Board = mongoose.model('Board', BoardSchema);

module.exports = Board;