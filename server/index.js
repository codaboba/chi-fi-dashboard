const express = require('express');
const volleyball = require('volleyball');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const db = require('./db/database');
const passport = require('passport');

const app = express();
const dbStore = new SequelizeStore({
  db,
});
dbStore.sync();

app.use(volleyball);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: process.env.SESSION_SECRET || 'wildly insecure secret',
    store: dbStore,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use('/api', require('./api'));

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

module.exports = app;
