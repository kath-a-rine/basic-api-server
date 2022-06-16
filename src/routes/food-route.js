'use strict';

const express = require('express');
const { FoodModel } = require('../models');

const router = express.Router();

router.post('/food', async(req, res, next) => {
  let food = req.body;

  let response = await FoodModel.create(food);
  res.status(200).send(response);
});

//  get all food items
router.get('/food', async (req, res, next) => {
  let allFoods = await FoodModel.findAll();
  res.status(200).send(allFoods);
});

// get one food item
router.get('/food/:id', async (req, res, next) => {
  let { id } = req.params;
  let oneFoodItem = await FoodModel.findOne({where: { id }});
  res.status(200).send(oneFoodItem);
});

// put/update a food item 
router.put('/food/:id', async (req, res, next) => {
  let { id } = req.params;
  await FoodModel.update(req.body, {where: { id }});
  let updatedFoodItem = await FoodModel.findOne({where: { id }});
  res.status(200).send(updatedFoodItem);
});

// delete a food item 
router.delete('/food/:id', async (req, res, next) => {
  let { id } = req.params;
  let deletedFoodItem = await FoodModel.findOne({where: { id }});
  await FoodModel.destroy({where: { id }});
  res.status(200).send(deletedFoodItem);
});

module.exports = router;