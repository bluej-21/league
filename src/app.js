var express = require('express');
var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/league');

var routes = require('./routes/routes');
var api = require('./routes/api');

/*
 * database
 */
var Game = require('./models/game');
var League = require('./models/league');
var Player = require('./models/player');
var db  = mongoose.connection;

/*
 * test database
 */
// db.on('error', console.error.bind(console, 'connection error'));
// db.on('open', () => {
// 	console.log('connected!');
// });

var app = express();

app.use('/', routes);
app.use('/api', api);

app.set('port', process.env.PORT || 8000);

app.set('views', __dirname + '/src/templates');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

var server = app.listen(app.get('port'), () => {
    console.log('app started');
});

