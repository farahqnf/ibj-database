'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Courses extends Model {
    static associate(models) {
      // have a relation many to one with categories
      Courses.belongsTo(models.Course_categories, {
        foreignKey: 'course_category_id'
      });

      // have a relation one to many with user_courses
      Courses.hasMany(models.User_courses, {
        foreignKey: 'course_id'
      });
    }
  }
  Courses.init({
    title: DataTypes.STRING,
    course_category_id: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Courses',
    timestamps: true,
  });
  return Courses;
};