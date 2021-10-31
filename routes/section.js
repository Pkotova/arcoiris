const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const session = require('express-session');
const Contact = require("../models/Section");

router.post('/create-section', (req, res) => {
})
router.post('/read-sections', (req, res) => {
})
router.get('/delete-section/:id', function (req, res) {
})
router.post('/update-section/:id', function (req, res) {
})

module.exports = router;