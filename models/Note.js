//Wondu Mamo, https://github.com/yealemiyelij |1 author(Wondu Mamo)

// Require mongoose
var mongoose = require("mongoose");

//Create a scheme class
var Schema = mongoose.Schema;

//Create a note schema
var NoteSchema = new Schema({
  body: {
    type:String
  }
});

//creating a 'Note' model on the note schema
var Note = mongoose.model("Note", NoteSchema);

// Export the Note model
module.exports = Note;
