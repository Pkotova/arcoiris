const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    uniqueIdentifier :{
        type: String,
        required: true
    },
    description:{
        type: String,
        required:true
    },
    estimatedTime:{
        type: Number,
        required: true
    },
    owner:{
        type:String, // user_id
        required: true
    },
    assignee:{
        type:String, // dropdown, choose one user
        required: true,
        default:"Not assigned"
    },
    comments:{
        type:Array,
        required: false
    },
    section:{
        type:String,//section_id
        required: true,
        default:"TO DO/NOT READY"
    },
    board:{
        type:String,
        required: false
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

const Task = mongoose.model('Task', TaskSchema);

module.exports = Task;
