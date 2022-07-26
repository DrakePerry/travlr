const createError = require('http-errors');
const express = require('express-handlebars');
const hbs = require('hbs');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
require('MongoDB').client;

const indexRouter = require('./app_server/routes/index');
const usersRouter = require('./app_server/routes/users');
const travelRouter = require('./app_server/routes/travel');
const { hasSubscribers } = require('diagnostics_channel');
const { default: mongoose } = require("mongoose");

var app = express();
// Use Handlebars view engine
app.set('view engine', '.hbs');
// view engine setup
app.set('views', path.join(__dirname, 'app_server', 'views'));

//  Register partials (https://www.npmjs.com/package/hbs_)
hbs.registerPartials(path.join(__dirname, 'app_server', 'views/partials'));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('./travel', travelRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
