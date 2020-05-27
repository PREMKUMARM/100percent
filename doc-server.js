/**
 * Express server decleration
 */
var express = require('express');

/**
 * Express server variable
 */
const app = express();

/**
 * Enable gzip compression
 */
app.use(compression({ level: 6 }));

/**
 * Static assets folder
 */
app.use(express.static(__dirname + '/dist/documentation'));

/**
 * Server variable
 */
var server = app.listen(7790, function() {
  console.log('App listening on port %d', server.address().port);
});