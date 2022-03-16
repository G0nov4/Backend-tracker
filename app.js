var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const config = require('config');

var indexRouter = require('./routes/index');

var app = express();

app.use(logger(config.get('logger')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// index de la carpeta publica que esta en este proyecto
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/v1/', indexRouter)


module.exports = app;
