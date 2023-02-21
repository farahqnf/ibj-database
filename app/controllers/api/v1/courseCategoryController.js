const courseCategoriesService = require("../../../services/courseCategoryService");

module.exports = {
  list(req, res) {
    courseCategoriesService
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
    courseCategoriesService
      .get(req.params.id)
      .then((Course_categories) => {
        res.status(200).json({
          status: "OK",
          data: Course_categories,
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
    courseCategoriesService
      .create(req.body)
      .then((Course_categories) => {
        res.status(201).json({
          status: "CREATED",
          data: Course_categories,
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
    // const course_categories = req.course_categories;

    courseCategoriesService
      .update(req.params.id, req.body)
      .then(() => {
        res.status(200).json({
          status: "OK",
          // data: course_categories,
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
    const Course_categories = req.course_categories;

    res.status(200).json({
      status: "OK",
      data: Course_categories,
    });
  },

  delete(req, res) {
    courseCategoriesService
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
