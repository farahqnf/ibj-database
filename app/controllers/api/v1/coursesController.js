const coursesService = require("../../../services/coursesService");

module.exports = {
  list(req, res) {
    coursesService
      .list()
      .then(({ data, count }) => {
        res.status(200).json({
          status: "OK",
          data: { posts: data },
          meta: { total: count },
        });
      })
      .catch((err) => {
        res.status(400).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  getById(req, res) {
    coursesService
      .get(req.params.id)
      .then((courses) => {
        res.status(200).json({
          status: "OK",
          data: courses,
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  addNew(req, res) {
    coursesService
      .create(req.body)
      .then((courses) => {
        res.status(201).json({
          status: "CREATED",
          data: courses,
        });
      })
      .catch((err) => {
        res.status(201).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  update(req, res) {
    coursesService
      .update(req.params.id, req.body)
      .then(() => {
        res.status(200).json({
          status: "OK",
          // data: courses,
        });
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

  show(req, res) {
    const courses = req.courses;

    res.status(200).json({
      status: "OK",
      data: courses,
    });
  },

  delete(req, res) {
    coursesService
      .delete(req.params.id)
      .then(() => {
        res.status(204).end();
      })
      .catch((err) => {
        res.status(422).json({
          status: "FAIL",
          message: err.message,
        });
      });
  },

};
