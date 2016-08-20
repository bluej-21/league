var express = require('express');
var mongoose = require('mongoose');
var request = require('request');
var bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/league');

/*
 * db Objects
 */
var Game = require('../models/game');
var League = require('../models/league');
var Player = require('../models/player');
var GameImage = require('../models/gameImg');

var db  = mongoose.connection;

var config = require('../../config');
var apiRouter = express.Router();

/*
 * apiRouter settings 
 */
apiRouter.use(bodyParser.urlencoded({ extended: true }));
apiRouter.use(bodyParser.json());
apiRouter.use((req, res, next) => {
  console.log('check authentication');
  next();
});

/*
 * test database
 */
db.on('error', console.error.bind(console, 'connection error'));
db.on('open', () => {
	console.log('connected!');
});


// GET: /api/
apiRouter.get('/', (req, res) => {
  res.send({
    message: 'This is the league api'
  });
});

// GET: api/gameImages
apiRouter.get('/gameImages',  (req, res) => {
  GameImage.find( (err, gameImages) => {
    if (err) { res.send(err); }
    res.json(gameImages);
  });
});

// GET: api/gameImages/random
apiRouter.get('/gameImages/random', (req, res) => {

});

/*
 * Players
 */
apiRouter.route('/players')

  // POST: api/players
  .post( (req, res) => {
    var player = new Player({name: req.body.name});


    player.save((err) => {
      if (err) {
        res.send(err);
      }
      res.json({message: "player created"});
    });
  })

  // GET: api/players
  .get( (req, res) => {
    Player.find( (err, players) => {
      if (err) { res.send(err); }
      res.json(players);
    });
  });

apiRouter.route('/players/:player_id')
  // GET: api/players/5
  .get( (req, res) => {
    Player.findById(req.params.player_id, (err, player) => {
      if (err) { res.send(err); }
      res.json(player);
    });
  })

  // PUT: api/players/5
  .put( (req, res) => {
    Player.findById(req.res.player_id, (err, player) => {
      if (err) { res.send(err); }

      // update player name
      player.name = req.body.name;

      // save player data
      player.save( (err) => {
        if (err) { res.send(err); }
        res.json({
          message: "player updated"
        });
      });
    });
  });

module.exports = apiRouter;
