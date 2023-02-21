const { Courses } = require("../models");

module.exports = {
  findAll() {
    return Courses.findAll();
  },

  create(data) {
    return Courses.create(data);
  },

  update(id, updateArgs) {
    return Courses.update(updateArgs, {
      where: {
        id,
      },
    });
  },

  delete(id) {
    return Courses.destroy({
      where: { id }
    });
  },

  find(id) {
    return Courses.findByPk(id);
  },

  getTotalPost() {
    return Courses.count();
  },
};
