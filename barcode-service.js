/*
 * BarCode Server
 * 
 * Patricio Díaz (padiazg@gmail.com)
 * 
 */

var express        = require('express');
var bodyParser     = require('body-parser');
var logger         = require('morgan');
var methodOverride = require('method-override');
var path           = require('path');
var routes         = require('./routes/routes.js');

var app = express();

app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');

app.use('/', routes);

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride());
app.use(express.static(path.join(__dirname, 'static')));

var server = app.listen(process.env.PORT || 3002, function() {
   console.log('Barcode server listening on port %d', server.address().port);
});
