const mongoose = require('mongoose');
const SectionSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    boardId:{
        type:String
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    updatedDate: {
        type: Date,
        default: Date.now
    }
});

const Section = mongoose.model('Section', SectionSchema);

module.exports = Section;