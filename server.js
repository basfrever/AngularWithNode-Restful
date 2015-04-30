var mongoose = require('mongoose'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    express = require('express'),
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
app.get('/', routes.index);
app.get('/partials/:name', routes.partials);
app.use('/api', require('./routes/api'));
// redirect all others to the index (HTML5 history)
app.get('*', routes.index);
// Start server
app.listen(3000);