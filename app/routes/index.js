'use strict';
var path = require('path');
var routes = require('express').Router();
var clicks = require('./clicks/index.js');

routes.get('/', function (req, res) {
   res.sendFile(path.resolve(__dirname + '/../../public/index.html'));
})

routes.use('/api/clicks', clicks);

module.exports = routes;
