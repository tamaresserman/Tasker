
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars');

var index = require('./routes/index');
var inputHobbies = require('./routes/inputHobbies');
var inputBreaks = require('./routes/inputBreaks');
var resources = require('./routes/resources');
var keepinmind = require('./routes/keepinmind');
var list = require('./routes/list');
var hobbies = require('./routes/hobbies');
var suggestions = require('./routes/suggestions');
// Example route
// var user = require('./routes/user');
var keepinmind2 = require('./routes/keepinmind2');


// So you can add a new hobby
var add = require ('./routes/add');
var addTask = require('./routes/addTask');
//var addBreaks = require('.routes/breaks')
var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
// Example route
// app.get('/users', user.list);

//login screen
app.get('/', index.view);
app.get('/old',index.view);
//view Hobbies
app.get('/hobbies', hobbies.view);
//input Tasks
app.get('/inputHobbies', inputHobbies.view);
//view Settings
app.get('/resources', resources.view);
//
app.get('/keepinmind', keepinmind.view);
//input bre
app.get('/inputBreaks', inputBreaks.view);
//
app.get('/list', list.addTask);
//add Hobbies
app.get('/add', add.addHobby);
//add Tasks
app.get('/addTask', addTask.addTask);
//app.get('/addBreaks', addbreaks.addBreaks')
//<<<<<<< HEAD
//=======
app.get('/suggestions', suggestions.view);

//>>>>>>> c8e880e23eee440d96b4bbdb91aa6fc299ecf05a
//B version login screen
app.get('/new', index.view2);

app.get('/keepinmind2', keepinmind2.view);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
