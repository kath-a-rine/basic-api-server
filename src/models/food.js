'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('food', {
    name : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cuisine: {
      type: DataTypes.ENUM,
      values: ['american', 'italian', 'chinese', 'japanese', 'indian', 'other'],
      allowNull: false,
    },
    allergens: {
      type: DataTypes.ENUM,
      values: ['gluten', 'dairy', 'peanuts', 'shellfish', 'tree nuts', 'soy', 'other'],
      allowNull: true,
    },
  });
};