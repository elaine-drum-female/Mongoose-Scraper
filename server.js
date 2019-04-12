// Require Express
var express = require("express");
var expressHandlebars = require("express-handlebars");

// Require Mongoose
var mongoose = require("mongoose");

// Set up PORT to either designated port or 3000
var PORT = process.env.PORT || 3000;
// Make use of Express app
var app = express();
// Set up Express router
var router = express.Router();

// Routes requirement to pass router object
require("./config/routes")(router);

//Designate public folder as static directory
app.use(express.static(__dirname + "/public"));

//Connect Handlebars to our Express app
app.engine("handlebars", expressHandlebars({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");


// Router middleware
app.use(router);

// If deployed, use the deployed database. Otherwise use the local mongoArticles database
var db = process.env.MONGODB_URI || "mongodb://localhost/mongoArticles";

// Connect Mongoose to our database
mongoose.connect(db, function(error) {
    if(error) {
        console.log(error);
    }
    // Or log success
    else {
        console.log("mongoose connection is successful");
    }
});




//Listen on PORT
app.listen(PORT, function() {
    console.log("Listening on port:" + PORT);
});

