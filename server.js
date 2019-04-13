// Require Express
var express = require("express");
var expressHandlebars = require("express-handlebars");

//Require Axios
var axios = require("axios");

// Require Cheerio
var cheerio = require("cheerio");

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
mongoose.connect(db, function (error) {
    if (error) {
        console.log(error);
    }
    // Or log success
    else {
        console.log("mongoose connection is successful");
    }
});

app.get("/all", function (req, res) {
    //this is supposed to retrieve all the data from the scrapedArticles collection..but I keep getting the  "find" ///undefined error
    db.scrapedArticles.find({} , function (err, found) {
        if(err) {
            console.log(err);
        }
        else {
            res.json(found);
        }
    });
});

app.get("/scrape", function (req, res) {
    axios.get("http://www.cnn.com/").then(function (response) {
        // Then, we load that into cheerio and save it to $ for a shorthand selector
        var $ = cheerio.load(response.data);

        // Now, we grab every h2 within an article tag, and do the following:
        $("cd cd--card cd--article cd--idx-0 cd--large cd--vertical cd--has-siblings cd--has-media cd--media__image").each(function (i, element) {
            var article = $(this).children("h3.cd__headline").text();
            var headlineText = $(this).children("span.cd__headline-text").text();
            var link = $(this).children("a").attr("href");

            if (article && headlineText && result) {
                db.scrapedArticles.save({
                        article: article,
                        headlineText: headlineText,
                        link: link
                    },

                    function (error, save) {
                        if (error) {
                            console.log(error);
                        } else {
                            console.log(save);
                        }
                    });
            }

        });

    });

        res.send("Scrape complete!");

});


//Listen on PORT
app.listen(PORT, function () {
    console.log("Listening on port:" + PORT);
});