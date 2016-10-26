'use strict';

var mongo = require('mongodb');

function database() {
   var _db

   function connect(callback) {
      mongo.connect('mongodb://localhost:27017/clementinejs', function (err, db) {
         if (err) {
            throw new Error('Database failed to connect!');
         } else {
            console.log('Successfully connected to MongoDB on port 27017.');
            _db = db
            callback()
         }
      });
   }

   function getClient() {
      return _db
   }

   return {
      connect: connect,
      getClient: getClient
   }
}


module.exports = database()
