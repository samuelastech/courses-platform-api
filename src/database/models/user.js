'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      User.hasMany(models.Course, { foreignKey: 'teacherId' });
      User.hasMany(models.Registration, { foreignKey: 'studentId' });
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    isActive: DataTypes.BOOLEAN,
    role: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
    tableName: 'users',
  });
  return User;
};