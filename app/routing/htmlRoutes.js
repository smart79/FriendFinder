var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var htmlRouter = express.Router();

htmlRouter.get('/survey', (req, res) => {
    res.sendFile(path.join(__dirname, '/survey.html'));
});

htmlRouter.get('/home', (req, res) => {
    res.sendFile(path.join(__dirname, '/home.html'));
});

module.exports = htmlRouter;