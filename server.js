//Dependencies
var express = require("express");


var app = express();
var PORT = process.env.PORT || 3000;

// Middleware to handle form data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

console.log("Serving images from:", __dirname + "/app/public/images");
// Serve static files (this is what allows images to load)
app.use('/images',express.static(__dirname + "/app/public/images"));

//Router
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


// Starts the server to begin listening
app.listen(PORT, function () {
  console.log("App listening on PORT: " + PORT);
});
