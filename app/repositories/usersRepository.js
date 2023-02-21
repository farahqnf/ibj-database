const { users } = require("../models");

module.exports = {
  findAll() {
    return users.findAll();
  },

  create(data) {
    return users.create(data);
  },

  update(id, updateArgs) {
    return users.update(updateArgs, {
      where: {
        id,
      },
    });
  },

  delete(id) {
    return users.destroy({
      where: { id }
    });
  },

  find(id) {
    return users.findByPk(id);
  },

  getTotalPost() {
    return users.count();
  },
};
