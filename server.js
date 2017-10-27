var express = require('express'),
  app = express(),
  path = require('path'),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://Filip:Ninetech17!@ds231315.mlab.com:31315/todo-list');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'dev')));

app.use("/js", express.static(__dirname + 'dev/js'));
console.log(__dirname);

var routes = require('./api/routes/todoListRoutes');
routes(app);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname + '/dev/index.html'));
});

app.use(function(req, res) {
  res.status(404).send({url: req.originalUrl + ' not found'})
});

app.listen(port);

console.log('todo list RESTful API server started on: ' + port);
