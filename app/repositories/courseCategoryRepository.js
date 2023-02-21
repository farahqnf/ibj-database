const { Course_categories } = require("../models");

module.exports = {
  findAll() {
    return Course_categories.findAll();
  },

  create(data) {
    return Course_categories.create(data);
  },

  update(id, updateArgs) {
    return Course_categories.update(updateArgs, {
      where: {
        id,
      },
    });
  },

  delete(id) {
    return Course_categories.destroy({
      where: { id }
    });
  },

  find(id) {
    return Course_categories.findByPk(id);
  },

  getTotalPost() {
    return Course_categories.count();
  },
};
