var express = require("express");
var burger = require("../models/burgers");

const router = express.Router();


router.get("/", function(req, res) {
     burger.all(function(data) {
         var burgObject = {
            burgers: data 
          };
         console.log(burgObject);
         res.render("index", burgObject);
     });
 });
 
 router.post("/api/burgers", function(req, res) {
      console.log(req.body.burger_name);

     burger.create(
      ["burger_name"],
      [req.body.burger_name],
       function(results) {
         res.json({ id: results.insertId });
     })
   
 });
 
 router.put("/api/burgers/:id", function(req, res) {
     var condition = "id=" + req.params.id;

     console.log("condition", condition);  

     burger.update({devoured: req.body.devoured}, condition,
       function(result) {
         if (result.changedRows == 0) {
           return res.status(404).end();
         } 
         else {
           res.status(200).end();
         }
       });
 });

module.exports = router;
