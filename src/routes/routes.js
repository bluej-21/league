import { Router as router } from 'express';

const rout = router();

rout.get('/', (req, res) => {
  res.render('index.html');
});

rout.get('/about', (req, res) => {
  res.render('about.html');
});

module.exports = rout;
