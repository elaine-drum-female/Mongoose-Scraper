var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentSchema = new Schema ({
    _ArticleId: {
        type: Schema.Types.ObjectId,
        ref: "Articles"
    },
    date: String,
    commentText: String
});

//Set up the model and export Articles
var Comment = mongoose.model("Comments", CommentSchema);
module.exports = Comments;
