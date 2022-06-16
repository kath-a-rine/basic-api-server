'use strict';

const express = require('express');
const foodRouter = require('./routes/food-route');
const bookRouter = require('./routes/book-route');
require('dotenv').config();

const app = express();

const DATABASE_URL = process.env.DATABASE_URL;

const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(foodRouter);
app.use(bookRouter);

const notFoundHandler = require('./error-handlers/404');

app.use('*', notFoundHandler);

module.exports = {
  server: app,
  start: () => app.listen(PORT, console.log('listening on port', PORT)),
};