var connection = require("../config/connection.js");

// sql querys
var orm = {
   selectAll: function(table, cb) {
       connection.query("SELECT * FROM burgers" +  ";"  ,function(err, res) {
           if (err) {
              throw err;
           }
           cb(res);
       })
   },
   insertOne: function(table , burger_name, cb) {
       connection.query("INSERT INTO burgers" + table +"(burger_name, devoured) VALUES (?,0);",[name], function(err,res) {
        if (err) {
            throw err;
          }
          cb(result);
        }); 
   },
   updateOne: function(table, val, id, cb) { 
    connection.query("UPDATE " + table + " SET devoured = " + val + " WHERE id = " + id + "", [table, val, id], function (err, res) {
        if (err) {
            throw err;
          }
          cb(res);
    });
} 
}

module.exports = orm;