'use strict';
module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    id:{
      allowNull :false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    publised: DataTypes.INTEGER,
    author: DataTypes.STRING,
   
  }, {});
  Book.associate = function(models) {
    // associations can be defined here
  };
  return Book;
};