const express = require("express");
const controllers = require("../app/controllers");
const apiRouter = express.Router();
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./openapi.yaml');
const redoc = require('redoc-express');
const { runValidation, checkName, checkEmail, checkPassword } = require('../app/middlewares/validation');
const bodyValidation = require("../app/middlewares/bodyValidation");
const validate = require("../app/middlewares/validate");


// CRUD for Course Category
apiRouter.get("/course-category/list", controllers.api.v1.courseCategoryController.list);
apiRouter.post("/course-category/add", controllers.api.v1.courseCategoryController.addNew);
apiRouter.post("/course-category/update/:id", controllers.api.v1.courseCategoryController.update);
apiRouter.get("/course-category/delete/:id", controllers.api.v1.courseCategoryController.delete);
apiRouter.get("/course-category/:id", controllers.api.v1.courseCategoryController.getById);

// CRUD for Courses
apiRouter.get("/courses/list", controllers.api.v1.coursesController.list);
apiRouter.post("/courses/add", controllers.api.v1.coursesController.addNew);
apiRouter.post("/courses/update/:id", controllers.api.v1.coursesController.update);
apiRouter.get("/courses/delete/:id", controllers.api.v1.coursesController.delete);
apiRouter.get("/courses/:id", controllers.api.v1.coursesController.getById);

// CRUD for User Courses
apiRouter.get("/user-courses/list", controllers.api.v1.userCoursesController.list);
apiRouter.post("/user-courses/add", controllers.api.v1.userCoursesController.addNew);
apiRouter.post("/user-courses/update/:id", controllers.api.v1.userCoursesController.update);
apiRouter.get("/user-courses/delete/:id", controllers.api.v1.userCoursesController.delete);
apiRouter.get("/user-courses/:id", controllers.api.v1.userCoursesController.getById);

// CRUD for Users
apiRouter.get("/users/list", controllers.api.v1.usersController.list);
apiRouter.post("/users/add", bodyValidation.nameValidate, bodyValidation.authValidate, validate.validate, controllers.api.v1.usersController.addNew);
apiRouter.post("/users/update/:id", controllers.api.v1.usersController.update);
apiRouter.get("/users/delete/:id", controllers.api.v1.usersController.delete);
apiRouter.get("/users/:id", controllers.api.v1.usersController.getById);

// ENDOPOINT for Admin
apiRouter.post("/admin/register", bodyValidation.nameValidate, bodyValidation.authValidate, validate.validate, controllers.api.v1.authController.register);
apiRouter.post("/admin/login", bodyValidation.authValidate, validate.validate, controllers.api.v1.authController.login);
apiRouter.get("/admin/whoami", controllers.api.v1.authController.authorize, controllers.api.v1.authController.whoAmI);

// API Documentation
apiRouter.get("/docs/swagger.json", (req, res) => {
  res.status(200).json(swaggerDocument)
});

apiRouter.get(
  '/docs', redoc({
    title: 'API Docs',
    specUrl: 'docs/swagger.json'
  })
);

apiRouter.get("/api/v1/errors", () => {
  throw new Error(
    "Something gone wrong."
  );
});

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);


module.exports = apiRouter;
