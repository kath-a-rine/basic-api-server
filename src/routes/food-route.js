'use strict';

const express = require('express');
const { FoodModel } = require('../models');

const router = express.Router();

router.post('/food', async(req, res, next) => {
  let food = req.body;

  let response = await FoodModel.create(food);
  res.status(200).send(response);
});

module.exports = router;