var express = require('express');
var routes = require('./src/routes/routes');

var app = express();

app.use('/', routes);

app.set('port', process.env.PORT || 8000);

app.set('views', __dirname + '/src/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

var server = app.listen(app.get('port'), () => {
    console.log('app started');
});

