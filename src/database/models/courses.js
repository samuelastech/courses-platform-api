'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    static associate(models) {
      Courses.belongsTo(models.Category, { foreignKey: 'categoryId' });
      Courses.belongsTo(models.User, { foreignKey: 'teacherId' });
      Courses.hasMany(models.Registration, { foreignKey: 'courseId' });
    }
  }
  Courses.init({
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    startDate: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'Course',
    tableName: 'courses',
  });
  return Courses;
};