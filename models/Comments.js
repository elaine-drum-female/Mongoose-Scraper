var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var CommentSchema = new Schema ({
    _headlineId: {
        type: Schema.Types.ObjectId,
        ref: "Headline"
    },
    date: String,
    commentText: String
});

//Set up the model and export Articles
var Comment = mongoose.model("Comment", CommentSchema);
module.exports = Comment;
