const userCoursesService = require("../../../services/userCoursesService");

module.exports = {
  list(req, res) {
    userCoursesService
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
    userCoursesService
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
    userCoursesService
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
    userCoursesService
      .update(req.params.id, req.body)
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

  show(req, res) {
    const courses = req.courses;

    res.status(200).json({
      status: "OK",
      data: courses,
    });
  },

  delete(req, res) {
    userCoursesService
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
