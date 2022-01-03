const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const session = require('express-session');
const Board = require("../models/Board");

router.post('/create-board', (req, res) => {
    const title = req.body['boardName']
    const owner = req.user.name// author to be the logged user

    const newBoard = new Board ({
        title:title,
        owner:owner,
    })
    newBoard.save()
        .then(data =>{
        }).catch(error=> {
        res.status(500).send({
            message: error.message || "Some error occurred while creating the Comment"
        })
    })
    res.redirect('/')
})

router.post('/read-board', (req, res) => {
    res.render('dashboard', {
        user: req.user
      })
})

router.get('/:id', (req, res) =>  {

    res.render('dashboard', {
        user: req.user
      })
}
)

router.get('/delete-board/:id', function (req, res) {
})
router.post('/update-board/:id', function (req, res) {
})
module.exports = router;