const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const session = require('express-session');
const Comment = require("../models/Comment");

router.post('/create-comment', (req, res) => {
    const content = req.body['content'];
    const author = req.user.name; // author to be the logged user
    const taskId = req.body['taskId'];
    const newComment = new Comment ({
        content:content,
        author:author,
        taskId:taskId
    })
    newComment.save()
        .then(data =>{
            console.log('hi');
        }).catch(error=> {
        res.status(500).send({
            message: error.message || "Some error occurred while creating the Comment"
        })
    })
    res.redirect('/')
})

router.get('/delete-comment/:id', function (req, res) {
    Comment.findByIdAndRemove(req.params.id).then((review)=>{
        res.redirect('/')
    }).catch((err) => {
        console.log(err.message);
    })
})
router.post('/update-comment/:id', function (req, res) {
    const filter = {_id: req.params.id};
    const updatedComment = {
        content: req.body['content']
    }
    Comment.findByIdAndUpdate(filter,updatedComment,
        function (err){
            if (err){
                res.send(err);
                return;
            }
            res.redirect('/')
        }
        )
})

module.exports = router;