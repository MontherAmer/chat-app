const path = require('path');
const cors = require('cors');
const logger = require('morgan');
const express = require('express');
const passport = require('passport');
const cookieParser = require('cookie-parser');

require('dotenv').config();
require('./db');

const apiRouter = require('./routes');

const app = express();

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);

app.get('*', (req, res) => res.sendFile(path.join(__dirname, '/public/build/index.html')));

passport.serializeUser(function (user, done) {
  done(null, user);
});

passport.deserializeUser(function (user, done) {
  done(null, user);
});

module.exports = app;
