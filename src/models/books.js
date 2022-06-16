'use strict';

module.exports = (sequelize, DataTypes) => {
  return sequelize.define('books', {
    title : {
      type: DataTypes.STRING,
      allowNull: false,
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    genre: {
      type: DataTypes.ENUM,
      values: ['nonfiction: any', 'sci-fi/fantasy', 'mystery', 'children\'s', 'crime', 'romance', 'graphic novel','poetry' ],
      allowNull: true,
    },
  });
};