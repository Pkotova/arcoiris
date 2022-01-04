const express = require('express');
const router = express.Router();
const BoardModel = require("../models/Board");

const { ensureAuthenticated, forwardAuthenticated } = require('../config/auth');

// Welcome Page
router.get('/', forwardAuthenticated, (req, res) => res.render('welcome'));

// Index
router.get('/index', ensureAuthenticated, (req, res) => {
  // const arr =  Board.findOne({owner: req.user.name});

  // console.log(arr);
  BoardModel.find({owner: req.user.name},function(err,data){
    res.render('index', {
      user: req.user,
      boards: data
    });

  });

  
});


module.exports = router;
