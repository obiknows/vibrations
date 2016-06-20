// Libraries & Things to require
var express = require('express');
var app = express();
var path = require('path');
var session = require('express-session');

// Configuration
app.set('views', path.join(__dirname, 'views'));


// Paths
// app.get('/', function (req, res) {
//   // First route
//   console.log('App is working!!');
// });

// Listen to all internal requests and things on [8080]
const port = 3301
app.listen(port);
console.log('server is listening on '+ port);

// Export
module.exports = app;
