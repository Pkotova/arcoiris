const express = require('express');
const router = express.Router();
const BoardModel = require("../models/Board");

const {ensureAuthenticated, forwardAuthenticated} = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Index
router.get('/index', ensureAuthenticated, (req, res) => {
    // const arr =  Board.findOne({owner: req.user.name});

    // console.log(arr);
    BoardModel.find({owner: req.user.name}, function (err, data) {
        // console.log(data);
        //console.log( req.user.name);
        res.render('index', {
            user: req.user,
            boards: data
        });

    });


});

// My Profile
router.get('/myprofile', ensureAuthenticated, (req, res) => {
    BoardModel.countDocuments({owner: req.user.name}, function (err, data) {
        console.log(data);
        //console.log( req.user.name);
        res.render('myprofile', {
            username: req.user.name,
            user: req.user,
            board: data
        });
    });
});

router.get('/help', ensureAuthenticated, (req, res) => {
    res.render('help', {
        user: req.user,
    });
});

module.exports = router;