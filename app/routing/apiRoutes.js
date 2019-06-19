var friends = require("../data/friends");

module.exports = function(app) {

    app.get("/api/friends", function(req, res) {
        return res.json(friends);
    });

    app.post("/api/friends", function(req, res) {

        // finds smallest number in array 
        Array.min = function( array ){
            return Math.min.apply( Math, array );
        };