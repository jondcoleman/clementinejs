'use strict'

var clicks = require('express').Router();
var clickHandler = require('../../controllers/clickHandler.server.js');

clicks.route('/')
   .get(clickHandler.getClicks)
   .post(clickHandler.addClick)
   .delete(clickHandler.resetClicks);

module.exports = clicks;
