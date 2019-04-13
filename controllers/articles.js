var scrape = require("../scripts/scrape");

var Articles = require("../models/Articles");

module.exports = {
    fetch: function(cb) {
        scrape(function(mydata) {
            var articles = mydata;
            for(var i = 0; i < articles.length;i++) {
                articles[i].saved = false;
            }

            Articles.collection.insertMany(articles, {ordered: false} , function(err, documents) {
                cb(err, documents);
            });
        });
    },

    delete: function(query, callback) {
        Article.remove(query, callback);
    }
}