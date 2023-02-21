'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user_courses extends Model {
    static associate(models) {
      // have a relation many to one with courses
      user_courses.belongsTo(models.courses, {
        foreignKey: 'course_id',
        as: 'courses'
      });

      // have a relation many to one with user
      user_courses.belongsTo(models.users, {
        foreignKey: 'users_id',
        as: 'users'
      });
    }
  }
  user_courses.init({
    users_id: DataTypes.INTEGER,
    course_id: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'user_courses',
    timestamps: true,
  });
  return user_courses;
};