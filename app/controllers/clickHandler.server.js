'use strict';

var database = require('../database');

var clickHandler = (function() {
   var db = database.getClient();
   var clicks = db.collection('clicks');

   function getClicks(req, res) {
      var clickProjection = { '_id': false };

      clicks.findOne({}, clickProjection, function (err, result) {
         if (err) {
            throw err;
         }

         if (result) {
            res.json(result);
         } else {
            clicks.insert({ 'clicks': 0 }, function (err) {
               if (err) {
                  throw err;
               }

               clicks.findOne({}, clickProjection, function (err, doc) {
                  if (err) {
                     throw err;
                  }

                  res.json(doc);
               });
            });
         }
      });
   }

   function addClick (req, res) {
      clicks.findAndModify({}, { '_id': 1 }, { $inc: { 'clicks': 1 }}, function (err, result) {
         if (err) {
            throw err;
         }

         res.json(result);
      });
   }

   function resetClicks (req, res) {
      clicks.update({}, { 'clicks': 0 }, function (err, result) {
         if (err) {
            throw err;
         }
         res.json(result);
      });
   }

   return {
      getClicks: getClicks,
      addClick: addClick,
      resetClicks: resetClicks
   }

})();

module.exports = clickHandler;
