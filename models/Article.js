//Wondu Mamo, https://github.com/yealemiyelij |1 author(Wondu Mamo)-->

// Require mongoose
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ArticleSchema = new Schema({
  title: {
    type: String,
    required: true
  },


  link: {
    type: String,
    required: true
  },


  notes: [{
    type: Schema.Types.ObjectId,
    ref: "Note"
  }]
});

var Article = mongoose.model("Article", ArticleSchema);

// Export the model
module.exports = Article;