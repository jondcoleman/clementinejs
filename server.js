'use strict';

var express = require('express');
var mongo = require('mongodb');
var database = require('./app/database')

var app = express();

app.use('/public', express.static(process.cwd() + '/public'));
app.use('/controllers', express.static(process.cwd() + '/app/controllers'));

database.connect(function () {
   var routes = require('./app/routes/index.js');
   app.use(routes)

   app.listen(3000, function () {
      console.log('Node.js listening on port 3000...');
   });
});
