const { User_courses } = require("../models");

module.exports = {
  findAll() {
    return User_courses.findAll();
  },

  create(data) {
    return User_courses.create(data);
  },

  update(id, updateArgs) {
    return User_courses.update(updateArgs, {
      where: {
        id,
      },
    });
  },

  delete(id) {
    return User_courses.destroy({
      where: { id }
    });
  },

  find(id) {
    return User_courses.findByPk(id);
  },

  getTotalPost() {
    return User_courses.count();
  },
};
