import { Router as router } from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import Player from '../models/player';
import GameImage from '../models/gameImg';
// ^ move to diff file
mongoose.connect('mongodb://localhost/league');

const apiRouter = router();

const db = mongoose.connection;


/*
 * apiRouter settings
 */
apiRouter.use(bodyParser.urlencoded({ extended: true }));
apiRouter.use(bodyParser.json());
apiRouter.use((req, res, next) => {
  // check auth
  next();
});

/*
 * test database
 */
db.on('error', () => {
  // add logger
});
db.on('open', () => {
	// console.log('connected!');
});


// GET: /api/
apiRouter.get('/', (req, res) => {
  res.send({
    message: 'This is the league api',
  });
});

// GET: api/gameImages
apiRouter.get('/gameImages', (req, res) => {
  GameImage.find((err, gameImages) => {
    if (err) { res.send(err); }
    res.json(gameImages);
    return gameImages;
  });
});

// GET: api/gameImages/random
apiRouter.get('/gameImages/random', (req, res) => {
  GameImage.random((err, gameImage) => {
    if (err) { res.send(err); }
    res.json(gameImage);
  });
});

/*
 * Players
 */
apiRouter.route('/players')

  // POST: api/players
  .post((req, res) => {
    const player = new Player({ name: req.body.name });


    player.save((err) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: 'player created' });
    });
  })

  // GET: api/players
  .get((req, res) => {
    Player.find((err, players) => {
      if (err) { res.send(err); }
      res.json(players);
      return players;
    });
  });

apiRouter.route('/players/:player_id')
  // GET: api/players/5
  .get((req, res) => {
    Player.findById(req.params.player_id, (err, player) => {
      if (err) { res.send(err); }
      res.json(player);
    });
  })

  // PUT: api/players/5
  .put((req, res) => {
    Player.findById(req.res.player_id, (err, player) => {
      if (err) { res.send(err); }

      // update player name
      player.name = req.body.name;

      // save player data
      player.save((error) => {
        if (error) { res.send(err); }
        res.json({
          message: 'player updated',
        });
      });
    });
  });

module.exports = apiRouter;
