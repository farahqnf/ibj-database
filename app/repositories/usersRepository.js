const { Users } = require("../models");

module.exports = {
  findAll() {
    return Users.findAll();
  },

  create(data) {
    return Users.create(data);
  },

  update(id, updateArgs) {
    return Users.update(updateArgs, {
      where: {
        id,
      },
    });
  },

  delete(id) {
    return Users.destroy({
      where: { id }
    });
  },

  find(id) {
    return Users.findByPk(id);
  },

  getTotalPost() {
    return Users.count();
  },
};
