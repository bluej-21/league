var express = require('express');
var mongoose = require('mongoose');
var request = require('request');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost:27017/league');

var Game = require('../models/game');
var League = require('../models/league');
var Player = require('../models/player');

var db  = mongoose.connection;

var config = require('../../config');
var apiRouter = express.Router();

/*
 * apiRouter settings 
 */
apiRouter.use( bodyParser.urlencoded({ extended: true }) );
apiRouter.use( bodyParser.json() );
/*
 * test database
 */

db.on('error', console.error.bind(console, 'connection error'));
db.on('open', () => {
	console.log('connected!');
});

/*
 * GETS
 */

// GET: /api/
apiRouter.get('/', (req, res) => {
  res.send({
    message: 'This is the league api'
  });
});

// GET: /api/games/
apiRouter.get('/games/', (req, res) => {
  res.send({
    games: 'games'
  });
});

// GET: /api/games/:game_id
apiRouter.get('/games/:game_id', (req, res) => {
  res.send({
    id: req.params.game_id
  });
});

module.exports = apiRouter;
