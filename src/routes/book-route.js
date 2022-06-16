'use strict';

const express = require('express');
const { BookModel } = require('../models');

const router = express.Router();

// add a book
router.post('/books', async(req, res, next) => {
  let book = req.body;

  let response = await BookModel.create(book);
  res.status(200).send(response);
});

// // get all books
router.get('/books', )

module.exports = router;