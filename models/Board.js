const mongoose = require('mongoose');

const BoardSchema = new mongoose.Schema({


});

const Board = mongoose.model('Comment', BoardSchema);

module.exports = Board;