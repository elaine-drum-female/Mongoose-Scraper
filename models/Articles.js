var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema ({
    article: {
        type: String,
        required: true,
        unique : true
    },
    headlineText: {
        type : String,
        required: true
    },
    saved: {
        type: Boolean,
        default:false
    }
});

//Set up the model and export Articles
var Article = mongoose.model("Articles", ArticleSchema);
module.exports = Articles;
