var path = require('path');
var express = require('express');

var app = express();

module.exports = app;

var ROUTES_PATH = '../routes';
var NODE_PATH = '../../node_modules';

app.use('/api', require(ROUTES_PATH + '/routes.api'));

//setup static routes
app.use('/', express.static(path.join(__dirname, '../../browser')));
app.use('/bootstrap', express.static(path.join(__dirname, NODE_PATH + '/bootstrap/dist')));
app.use('/angular', express.static(path.join(__dirname, NODE_PATH + '/angular')));
app.use('/node_modules', express.static(path.join(__dirname, NODE_PATH)));
