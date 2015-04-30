

var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cors = require('cors');
var express = require('express'),
  routes = require('./routes');
var app = express();
mongoose.connect('mongodb://127.0.0.1/appcreator');

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.set('view options', {
    layout: false
});
app.use(cors());	//enable express to use CORS. You may want to disable/restrict in production
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());    
app.use(express.static(__dirname + '/public'));

// Routes

app.get('/', routes.index);
app.get('/partials/:name', routes.partials);

app.use('/api', require('./routes/api'));

app.get('*', routes.index);

// Start server

app.listen(3000);











