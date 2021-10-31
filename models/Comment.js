const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
    content :{
        type: String,
        required:true
    },
    author:{
        type: String, // user_id
        required:true
    },
    taskId:{
        type: String,//task_id
        required:true
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

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;
