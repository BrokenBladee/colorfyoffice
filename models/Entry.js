const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const EntrySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Entry = mongoose.model('entry', EntrySchema);
