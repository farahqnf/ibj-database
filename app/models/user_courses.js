'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User_courses extends Model {
    static associate(models) {
      // have a relation many to one with courses
      User_courses.belongsTo(models.Courses, {
        foreignKey: 'course_id',
        as: 'courses'
      });

      // have a relation many to one with user
      User_courses.belongsTo(models.Users, {
        foreignKey: 'users_id',
        as: 'Users'
      });
    }
  }
  User_courses.init({
    users_id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'User_courses',
    timestamps: true,
  });
  return User_courses;
};