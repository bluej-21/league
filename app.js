var express = require('express');
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017');

var routes = require('./src/routes/index');

// database
// ------
var Game = require('./models/game');
var League = require('./models/league');
var Player = require('./models/player');
var db  = mongoose.connection;

// test database
// ------
db.on('error', console.error.bind(console, 'connection error'));
db.on('open', () => {
	console.log('connected!');
});

var app = express();

app.use('/', routes);

app.set('port', process.env.PORT || 8000);

app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views'.createEngine()));

var server = app.listen(app.get('port'), () => {
    console.log('app started');
});

