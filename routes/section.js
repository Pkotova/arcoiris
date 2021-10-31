const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const session = require('express-session');
const Section = require("../models/Section");

router.post('/create-section', (req, res) => {
    const title  = req.body['title'];
    const newSection = new Comment ({
        content:content,
        author:author,
        taskId:taskId
    })
    newSection.save()
        .then(data =>{
            console.log('hi');
        }).catch(error=> {
        res.status(500).send({
            message: error.message || "Some error occurred while creating the Comment"
        })
    })
    res.redirect('/')
})

router.get('/delete-section/:id', function (req, res) {
    Section.findByIdAndRemove(req.params.id).then((review)=>{
        res.redirect('/')
    }).catch((err) => {
        console.log(err.message);
    })
})
router.post('/update-section/:id', function (req, res) {
    const filter = {_id: req.params.id};
    const updatedComment = {
        content: req.body['content']
    }
    Section.findByIdAndUpdate(filter,updatedComment,
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