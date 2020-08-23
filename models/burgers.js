var orm = require("../config/orm");

var burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    
    create: function(burger_name,cb) {
        orm.insertOne("burgers",burger_name, function(res) {
            cb(res);
        }); 
    },

    update: function(devoured, burgerId,cb) {
        orm.updateOne("burgers", devoured, burgerId, function(res) {
            cb(res);
        });
    }
};

module.exports = burger;

