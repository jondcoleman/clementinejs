'use strict';

var express = require('express');
var mongo = require('mongodb');
var routes = require('./server/routes/index.js');

var app = express();

mongo.connect('mongodb://localhost:27017/clementinejs', function (err, db) {
   if (err) {
      throw new Error('Database failed to connect!');
   } else {
      console.log('Successfully connected to MongoDB on port 27017.');
   }

   app.use('/app', express.static(process.cwd() + '/app'));

   routes(app, db);

   app.listen(3000, function () {
      console.log('Node.js listening on port 3000...');
   });
});
