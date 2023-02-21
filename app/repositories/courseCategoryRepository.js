const { course_categories } = require("../models");

module.exports = {
  findAll() {
    return course_categories.findAll();
  },

  create(data) {
    return course_categories.create(data);
  },

  update(id, updateArgs) {
    return course_categories.update(updateArgs, {
      where: {
        id,
      },
    });
  },

  delete(id) {
    return course_categories.destroy({
      where: { id }
    });
  },

  find(id) {
    return course_categories.findByPk(id);
  },

  getTotalPost() {
    return course_categories.count();
  },
};
