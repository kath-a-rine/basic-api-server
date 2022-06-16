'use strict';

const { Sequelize, DataTypes } = require('sequelize');
const foodModel = require('./food');
const bookModel = require('./books');

const DATABASE_URL = process.env.NODE_ENV === 'test' 
  ? 'sqlite::memory'
  : process.env.DATABASE_URL || 'postgres://localhost:5432/401d46-api-app';

const sequelize = new Sequelize(DATABASE_URL, {
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});   

const FoodModel = foodModel(sequelize, DataTypes);
const BookModel = bookModel(sequelize, DataTypes);

module.exports = {
  sequelize,
  FoodModel,
  BookModel,
};