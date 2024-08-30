'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Categories extends Model {
    static associate(models) {
      Categories.hasMany(models.Course, { foreignKey: 'categoryId' });
    }
  }
  Categories.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Category',
    tableName: 'categories'
  });
  return Categories;
};