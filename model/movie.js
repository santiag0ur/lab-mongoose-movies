const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  //celebrity_id: {
  //type: mongoose.Schema.Types.ObjectId,
  //required: true,
  //ref: 'Celebrity'
  //},
  title: {
    type: String,
    required: true
  },
  genre: {
    type: String,
    required: true
  },
  plot: {
    type: String
  }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
