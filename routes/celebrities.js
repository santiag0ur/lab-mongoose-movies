const express = require('express');
const Celebrity = require('../model/celebrity');
const Movie = require('../model/movie');

const celebrityRouter = express.Router();

//router.get('/celebrity', (req, res, next) => {
//    res.render('index');
//});

celebrityRouter.get('/', (request, response, next) => {
  console.log('say we are there again');
  Celebrity.find({})
    .then((data) => {
      response.render('./celebrities/index', { data });
    })
    .catch((error) => {
      next(error);
    });
});

celebrityRouter.get('/create', (request, response, next) => {
  console.log('on my way');
  response.render('./celebrities/create');
});

celebrityRouter.post('/create', (request, response, next) => {
  console.log('on my way again');
  const name = request.body.name;
  const occupation = request.body.occupation;
  const catchPhrase = request.body.catchPhrase;
  Celebrity.create({ name, occupation, catchPhrase })
    .then(() => {
      response.redirect('/');
    })
    .catch((error) => {
      next(error);
    });
});

celebrityRouter.post('/createmovie', (request, response, next) => {
  console.log('fiming on my way again');
  const title = request.body.title;
  const genre = request.body.genre;
  const plot = request.body.plot;
  Celebrity.create({ title, genre, plot })
    .then(() => {
      response.redirect('/');
    })
    .catch((error) => {
      next(error);
    });
});

celebrityRouter.post('/:id/delete', (request, response, next) => {
  console.log('let´s destroy');
  const id = request.params.id;
  Celebrity.findByIdAndDelete(id)
    .then(() => {
      response.redirect('/');
    })
    .catch((error) => {
      next(error);
    });
});

celebrityRouter.get('/:id/edit', (request, response, next) => {
  console.log('first step to edit');
  const id = request.params.id;
  Celebrity.findById(id)
    .then((data) => {
      response.render(`./celebrities/edit`, { data });
    })
    .catch((error) => {
      next(error);
    });
});

celebrityRouter.post('/:id', (request, response, next) => {
  console.log('let´s edit');
  const id = request.params.id;
  const name = request.body.name;
  const occupation = request.body.occupation;
  const catchPhrase = request.body.catchPhrase;
  Celebrity.findByIdAndUpdate(id, { name, occupation, catchPhrase })
    .then(() => {
      response.redirect('/');
    })
    .catch((error) => {
      next(error);
    });
});

celebrityRouter.get('/:id', (request, response, next) => {
  const id = request.params.id;
  Celebrity.findById(id)
    .then((data) => {
      console.log(data.occupation);
      response.render('./celebrities/show', { data });
    })
    .catch((error) => {
      next(error);
    });
});

module.exports = celebrityRouter;
