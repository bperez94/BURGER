var connection = require("../config/connection.js");

// sql querys
var orm = {
   selectAll: function(tableInput, cb) {
       connection.query("SELECT * FROM" + tableInput + ";", function(err, result) {
           if (err) {
              throw err;
           }
           cb(result);
       })
   },
   insertOne: function(table, name, cb) {
       connection.query("INSERT INTO" + table + "(burger_name, devoured) VALUES (?,0);", [name], function(err,result) {
           if (err) {
               throw err;
           }
           cb(result);
       }  )
   }
}

module.exports = orm;