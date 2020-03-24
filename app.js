var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

var indexRouter = require('./routes/index');
var allDataRouter = require('./routes/allData');
var countriesRouter = require('./routes/countries');
var activeCasesRouter = require('./routes/activeCases');
var totalRecoveredRouter = require('./routes/totalRecovered');
var totalDeathsRouter = require('./routes/totalDeaths');

var app = express();

// for react uses on localhost
app.use(cors({ origin: 'http://localhost:3001' }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/api', allDataRouter);
app.use('/api/countries', countriesRouter);
app.use('/api/active-cases', activeCasesRouter);
app.use('/api/total-recovered', totalRecoveredRouter);
app.use('/api/total-deaths', totalDeathsRouter);

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
