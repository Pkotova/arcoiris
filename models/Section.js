const mongoose = require('mongoose');

const SectionSchema = new mongoose.Schema({

});

const Section = mongoose.model('Section', SectionSchema);

module.exports = Section;