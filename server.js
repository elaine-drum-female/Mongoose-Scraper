// Require Express
var express = require("express");
var expressHandlebars = require("express-handlebars");

// Set up PORT to either designated port or 3000
var PORT = process.env.PORT || 3000;
// Make use of Express app
var app = express();
// Set up Express router
var router = express.Router();
//Designate public folder as static directory
app.use(express.static(__dirname + "/public"));
// Router middleware
app.use(router);

//Listen on PORT
app.listen(PORT, function() {
    console.log("Listening on port:" + PORT);
});

