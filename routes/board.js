const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const session = require('express-session');
const Board = require("../models/Board");
const Section = require("../models/Section");
const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

router.post('/create-board', (req, res) => {
    const title = req.body['boardName']
    const owner = req.user.name// author to be the logged user
    const id = ["61706644677b7109ec2a7be6","617edbef9ffef35ea4567931"]
    const newBoard = new Board ({
        title:title,
        owner:owner,
        participants: id,
    })
    newBoard.save()
        .then(data =>{
        }).catch(error=> {
        res.status(500).send({
            message: error.message || "Some error occurred while creating the Comment"
        })
    })
    const newSection = new Section ({
        title: "TO DO",
        boardId: newBoard._id,
    })
    newSection.save()

    const newSectionOne = new Section ({
        title: "IN PROGRESS",
        boardId: newBoard._id,
    })
    newSectionOne.save()


    const newSectionTwo = new Section ({
        title: "DONE",
        boardId: newBoard._id,
    })
    newSectionTwo.save()


    res.redirect('/')
})

router.post('/read-board', (req, res) => {
    res.render('dashboard', {
        user: req.user
      })
})

router.get('/:id', ensureAuthenticated, (req, res) =>  {
     console.log(req.params.id);
   
      Board.findOne({_id: req.params.id},function(err,data){

          Section.find({boardId: req.params.id},function(err,section) {
            res.render('dashboard', {
                user: req.user,
                board: data,
                sections: section,
              });
          });
    
      });

   
    
})

router.get('/delete-board/:id', function (req, res) {
})
router.post('/update-board/:id', function (req, res) {
})
module.exports = router;