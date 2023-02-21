'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class courses extends Model {
    static associate(models) {
      // have a relation many to one with categories
      courses.belongsTo(models.course_categories, {
        foreignKey: 'course_category_id'
      });

      // have a relation one to many with user_courses
      courses.hasMany(models.user_courses, {
        foreignKey: 'course_id'
      });
    }
  }
  courses.init({
    title: DataTypes.STRING,
    course_category_id: DataTypes.INTEGER,
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'courses',
    timestamps: true,
  });
  return courses;
};