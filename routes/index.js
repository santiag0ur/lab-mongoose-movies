const express = require('express');
const router = express.Router();

//router.get('/celebrity', (req, res, next) => {
//console.log('say we are there again2');
// res.render('index');
//});

//Handle GET request for website root
router.get('/', (req, res, next) => {
  console.log('say hello 11');
  res.render('index');
});

module.exports = router;
