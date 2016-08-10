var express = require('express');
var logger = require('morgan');
var path = require('path');

var router = require('./routes/routes');

var app = express();

/*
 * Globals
 */
var PORT = process.env.PORT || 8000;
var TEMPLATES = path.join(__dirname, '/templates');
/*
 * Express Settings
 */
app.set('port', PORT);
// view engine
app.set('views', TEMPLATES);
app.set('view engine', 'ejs');
app.use(express.static(__dirname + ''));

app.use(logger('dev'));

app.use('/', router);



var server = app.listen(app.get('port'), () => {
    console.log('app started on http://localhost:' + PORT);
});

