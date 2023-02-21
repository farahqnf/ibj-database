'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course_categories extends Model {
    static associate(models) {
      // have a relation one to many with courses
      Course_categories.hasMany(models.Courses, {
        foreignKey: 'course_category_id',
        as: 'courses'
      });
    }
  }
  Course_categories.init({
    name: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Course_categories',
    timestamps: true,
  });
  return Course_categories;
};