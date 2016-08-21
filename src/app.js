import express from 'express';
import path from 'path';
import ejs from 'ejs';

import routes from './routes/routes';
import api from './routes/api';


const app = express();

app.use('/', routes);
app.use('/api', api);

app.set('port', process.env.PORT || 8000);

app.set('views', path.join(__dirname, '/src/templates'));
app.engine('html', ejs.renderFile);
app.set('view engine', 'ejs');

app.listen(app.get('port'), () => {
  // eslint does not like console.log. we can choose to change
  // ideally, we'd just output to a log file that goes to a db
  // or something like that
  // console.log('app started');
});

