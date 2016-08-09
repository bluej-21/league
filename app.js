var express = require('express');
var router = require('./src/routes/routes');

var app = express();
var PORT = process.env.PORT || 8000;

app.use('/', router);

app.set('port', PORT);

app.set('views', __dirname + '/src/templates');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

var server = app.listen(app.get('port'), () => {
    console.log('app started on http://localhost:' + PORT);
});

