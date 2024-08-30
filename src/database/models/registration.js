'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Registration extends Model {
    static associate(models) {
      Registration.belongsTo(models.User, { foreignKey: 'studentId' });
      Registration.belongsTo(models.Course, { foreignKey: 'courseId' });
    }
  }
  Registration.init({
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Registration',
    tableName: 'registrations',
  });
  return Registration;
};