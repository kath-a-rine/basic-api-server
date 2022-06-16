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

//  get all books
router.get('/books', async (req, res, next) => {
  let allBooks = await BookModel.findAll();
  res.status(200).send(allBooks);
});

// get one book
router.get('/books/:id', async (req, res, next) => {
  let { id } = req.params;
  let oneBook = await BookModel.findOne({where: { id }});
  res.status(200).send(oneBook);
});

// put/update a book 
router.put('/books/:id', async (req, res, next) => {
  let { id } = req.params;
  await BookModel.update(req.body, {where: { id }});
  let updatedBook = await BookModel.findOne({where: { id }});
  res.status(200).send(updatedBook);
});

// delete a book 
router.delete('/books/:id', async (req, res, next) => {
  let { id } = req.params;
  let deletedBook = await BookModel.findOne({where: { id }});
  await BookModel.destroy({where: { id }});
  res.status(200).send(deletedBook);
});

module.exports = router;