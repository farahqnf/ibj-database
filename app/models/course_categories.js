'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class course_categories extends Model {
    static associate(models) {
      // have a relation one to many with courses
      course_categories.hasMany(models.courses, {
        foreignKey: 'course_category_id',
        as: 'courses'
      });
    }
  }
  course_categories.init({
    name: DataTypes.STRING,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'course_categories',
    timestamps: true,
  });
  return course_categories;
};