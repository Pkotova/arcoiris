const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const session = require('express-session');
const Contact = require("../models/Task");

router.post('/create-task', (req, res) => {
})
router.post('/read-tasks', (req, res) => {
})
router.get('/delete-task/:id', function (req, res) {
})
router.post('/update-task/:id', function (req, res) {
})

module.exports = router;