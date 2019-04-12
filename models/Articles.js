var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ArticleSchema = new Schema ({
    article: {
        type: String,
        required: true,
        unique : true
    },
    author: {
        type: String,
        required: true,
        unique : true
    },
    summary: {
        type : String,
        required: true
    },
    date: String,
    saved: {
        type: Boolean,
        default:false
    }
});

