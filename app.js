var express = require('express');
var router = require('./src/routes/routes');

var app = express();

app.use('/', router);

app.set('port', process.env.PORT || 8000);

app.set('views', __dirname + '/src/templates');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

var server = app.listen(app.get('port'), () => {
    console.log('app started');
});

