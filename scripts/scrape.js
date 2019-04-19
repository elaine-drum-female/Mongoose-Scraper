// Scrape script

//Require cheerio in order to make our scrapes work
var cheerio = require("cheerio");

//Require Axios
var axios = require("axios");

function scrape() {
    // console.log("routehit");
    return axios.get("http://www.nytimes.com/section/technology").then(function (response) {
        // Then, we load that into cheerio and save it to $ for a shorthand selector
        var $ = cheerio.load(response.data);

        //Saving results into the array
        var results = [];

        // Now, we grab every h2 within an article tag, and do the following:
        $(".css-4jyr1y").each(function (i, element) {
            // var article = $(this).children("a").text();
            // console.log(article);
            var headlineText = $(this).children("a").children("h2").text();
            // console.log(headlineText);
            var summary = $(this).children("a").children("p").text();
            // console.log(summary);
            var link = $(this).children("a").attr("href");
            // console.log(link);

            results.push({
                headlineText,
                summary,
                link
            });

        });

        console.log(results);
        return results;

    });
}

module.exports = scrape;