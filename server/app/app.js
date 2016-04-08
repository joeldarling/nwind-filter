var express = require('express');

var app = express();

module.exports = app;

var ROUTES_PATH = '../routes';

app.use('/', require(ROUTES_PATH));

app.use('/api', require(ROUTES_PATH + '/routes.api'));
