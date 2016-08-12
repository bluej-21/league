var express = require('express');
var apiRouter = express.Router();

apiRouter.get('/api', (req, res) => {
  res.send('This is the league api');
});

module.exports = apiRouter;
