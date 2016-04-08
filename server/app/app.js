var path = require('path');
var express = require('express');

var app = express();

module.exports = app;

var ROUTES_PATH = '../routes';

app.use('/', require(ROUTES_PATH));
app.use('/api', require(ROUTES_PATH + '/routes.api'));

//setup static routes
app.use('/bootstrap', express.static(path.join(__dirname, '../../node_modules/bootstrap/dist')));
app.use('/angular', express.static(path.join(__dirname, '../../node_modules/angular')));
app.use('/node_modules', express.static(path.join(__dirname, '../../node_modules')));

app.use(express.static(path.join(__dirname, '../../browser')));
