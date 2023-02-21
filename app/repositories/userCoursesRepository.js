const { user_courses } = require("../models");

module.exports = {
  findAll() {
    return user_courses.findAll();
  },

  create(data) {
    return user_courses.create(data);
  },

  update(id, updateArgs) {
    return user_courses.update(updateArgs, {
      where: {
        id,
      },
    });
  },

  delete(id) {
    return user_courses.destroy({
      where: { id }
    });
  },

  find(id) {
    return user_courses.findByPk(id);
  },

  getTotalPost() {
    return user_courses.count();
  },
};
