var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var config = require('./config');
var jwt    = require('jsonwebtoken'); // used to create, sign, and verify tokens
var mysql = require('mysql');

var connection = mysql.createConnection({
  host     : config.mysqlConfig.host,
  user     : config.mysqlConfig.user,
  password : config.mysqlConfig.password,
  database : config.mysqlConfig.database
});

var app = express();

app.set('superSecret', config.authenConfig.secret); // secret variable

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies


app.use(express.static(path.join(__dirname, 'public')));

//to accept cross origin requests.
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  next();
});


/*
  Authentication code start
*/
// get an instance of the router for api routes
var apiRoutes = express.Router();

apiRoutes.post('/add/:userdata' , function (req, res, next) {
	var user = JSON.parse(req.params.userdata);
 
  var query = "insert into user_details values ('"+ user.name+"','"+ user.address+"','"+ user.city+"','"+ user.email+"','"+ user.contact+"')";
console.log('Details saved Successfully');
  connection.query(query, function(err, rows, fields) {
    if (err) throw err; 
  }); 

});


apiRoutes.post('/display/' , function (req, res, next) {
 var query1 = "select * from  user_details ";
  connection.query(query1, function(err, rows, fields) {
    if (err) throw err; 
	res.json(rows);
	
  }); 

});



 // apply the routes to our application with the prefix /api
app.use('/api', apiRoutes);

/*
  Authentication code end
*/

apiRoutes.get('/', function(req, res) {
    res.sendfile('./public/index.html'); // load the single view file (angular will handle the page changes on the front-end)
});

//apiRoutes.listen() will give an error.
app.listen(8080, function () {
	console.log('Listening on localhost:8080');
});
