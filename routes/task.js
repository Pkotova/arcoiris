const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const session = require('express-session');
const Task = require("../models/Task");


router.post('/create-task', (req, res) => {
    // const title = req.body['title'];
    // const board = req.body['board'];
    // const uniqueIdentifier = req.body['uniqueIdentifier'];
    // const description = req.body['description'];
    // const estimatedTime = req.body['estimatedTime'];
    // const owner = req.user.name;
    // const assignee = req.body['assignee'];
    // const section = req.body['section'];

    const title ="New Task";
    const board = "61d47a80eb4c804bb67d816c";
    const uniqueIdentifier = "HM";
    const description = "bla bla";
    const estimatedTime = "bla bla";
    const owner = req.user.name;
    const assignee = "boom boom";
    const section = "61d47a80eb4c804bb67d816f";
    
    const newTask = new Task ({
        title: title,
        uniqueIdentifier:uniqueIdentifier,
        description:description,
        estimatedTime:estimatedTime,
        owner:owner,
        assignee: assignee,
        section: section,
        board:board,

    })
    newTask.save()
        .then(data =>{
            console.log('hi');
        }).catch(error=> {
        res.status(500).send({
            message: error.message || "Some error occurred while creating the Comment"
        })
    })
    res.redirect('/')

})
router.get('/delete-task/:id', function (req, res) {
    Task.findByIdAndRemove(req.params.id).then((review)=>{
        res.redirect('/')
    }).catch((err) => {
        console.log(err.message);
    })
})
router.post('/update-task/:id', function (req, res) {
    const filter = {_id: req.params.id};
    const updatedComment = {
        content: req.body['content']
    }
    Task.findByIdAndUpdate(filter,updatedComment,
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