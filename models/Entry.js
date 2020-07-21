const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const EntrySchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  reason:{
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Entry = mongoose.model('entry', EntrySchema);
