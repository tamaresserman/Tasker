
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var inputTasks = require('./routes/inputTasks');
var hobbies = require('./routes/hobbies');
var settings = require('./routes/settings');
var tasker = require('./routes/tasker');
var list = require('./routes/list');
var breaks = require('./routes/breaks');
// Example route
// var user = require('./routes/user');

// So you can add a new hobby
var add = require ('./routes/add')
var addTask = require('./routes/addTask')
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
app.get('/', index.view);
app.get('/hobbies', hobbies.view);
app.get('/inputTasks', inputTasks.view);
app.get('/settings', settings.view);
app.get('/tasker', tasker.view);
app.get('/breaks', breaks.view);
app.get('/list', list.addTask);
// Example route
// app.get('/users', user.list);

//add Hobby
app.get('/add', add.addHobby);
app.get('/addTask', addTask.addTask);
//app.get('/addBreaks', addbreaks.addBreaks')

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
