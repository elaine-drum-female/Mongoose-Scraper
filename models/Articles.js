var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema ({
    headlineText: {
        type : String,
        required: true
    },
    summary: {
        type: String,
        required: true,
        unique : {index: {unique: true}}
    },
    link: {
        type: String,
        required: true
    },
    saved: {
        type: Boolean,
        default:false
    },
    comment: {
        type: Schema.Types.ObjectId,
        ref:"Comment"
    }
});

//Set up the model and export Articles
var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;
