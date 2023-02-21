const { courses } = require("../models");

module.exports = {
  findAll() {
    return courses.findAll();
  },

  create(data) {
    return courses.create(data);
  },

  update(id, updateArgs) {
    return courses.update(updateArgs, {
      where: {
        id,
      },
    });
  },

  delete(id) {
    return courses.destroy({
      where: { id }
    });
  },

  find(id) {
    return courses.findByPk(id);
  },

  getTotalPost() {
    return courses.count();
  },
};
