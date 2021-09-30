const express = require('express');
const Celebrity = require('../model/celebrity');
const Movie = require('../model/movie');

const celebrityRouter = express.Router();
const movieRouter = express.Router();

//router.get('/celebrity', (req, res, next) => {
//    res.render('index');
//});

movieRouter.get('/', (request, response, next) => {
  console.log('say we are there again with movies');
  Movie.find({})
    .then((data) => {
      response.render('./movies/indexmovies', { data });
    })
    .catch((error) => {
      next(error);
    });
});

movieRouter.get('/createmovies', (request, response, next) => {
  console.log('on my way to create a movie');
  response.render('./movies/createmovies');
});

movieRouter.post('/createmovies', (request, response, next) => {
  console.log('on my way again to create movies');
  const title = request.body.title;
  const genre = request.body.genre;
  const plot = request.body.plot;
  Movie.create({ title, genre, plot })
    .then(() => {
      response.redirect('/');
    })
    .catch((error) => {
      next(error);
    });
});

movieRouter.post('/:id/delete', (request, response, next) => {
  console.log('let´s destroy a movie');
  const id = request.params.id;
  Movie.findByIdAndDelete(id)
    .then(() => {
      response.redirect('/');
    })
    .catch((error) => {
      next(error);
    });
});

movieRouter.get('/:id/edit', (request, response, next) => {
  console.log('first step to edit a movie');
  const id = request.params.id;
  Movie.findById(id)
    .then((data) => {
      response.render(`./movies/editmovies`, { data });
    })
    .catch((error) => {
      next(error);
    });
});

movieRouter.post('/:id', (request, response, next) => {
  console.log('let´s edit a movie');
  const id = request.params.id;
  const title = request.body.title;
  const genre = request.body.genre;
  const plot = request.body.plot;
  Movie.findByIdAndUpdate(id, { title, genre, plot })
    .then(() => {
      response.redirect('/');
    })
    .catch((error) => {
      next(error);
    });
});

movieRouter.get('/:id', (request, response, next) => {
  const id = request.params.id;
  Movie.findById(id)
    .then((data) => {
      console.log(data.genre);
      response.render('./movies/showmovies', { data });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = movieRouter;
