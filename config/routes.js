const express = require("express");
const controllers = require("../app/controllers");
const apiRouter = express.Router();
const YAML = require('yamljs');
const redoc = require('redoc-express');
const bodyValidation = require("../app/middlewares/bodyValidation");
const validate = require("../app/middlewares/validate");


// ENDOPOINT for Admin
apiRouter.post("/admin/register", bodyValidation.nameValidate, bodyValidation.authValidate, validate.validate, controllers.api.v1.authController.register);
apiRouter.post("/admin/login", bodyValidation.authValidate, validate.validate, controllers.api.v1.authController.login);
apiRouter.get("/admin/whoami", controllers.api.v1.authController.authorize, controllers.api.v1.authController.whoAmI);

// CRUD for Course Category
apiRouter.get("/course-category/list", controllers.api.v1.courseCategoryController.list);
apiRouter.post("/course-category/add", bodyValidation.nameValidate, validate.validate, controllers.api.v1.courseCategoryController.addNew);
apiRouter.post("/course-category/update/:id", bodyValidation.nameValidate, validate.validate, controllers.api.v1.courseCategoryController.update);
apiRouter.get("/course-category/delete/:id", controllers.api.v1.courseCategoryController.delete);
apiRouter.get("/course-category/:id", controllers.api.v1.courseCategoryController.getById);

// CRUD for Courses
apiRouter.get("/courses/list", controllers.api.v1.coursesController.list);
apiRouter.post("/courses/add", bodyValidation.coursesValidate, validate.validate, controllers.api.v1.coursesController.addNew);
apiRouter.post("/courses/update/:id", bodyValidation.coursesValidate, validate.validate, controllers.api.v1.coursesController.update);
apiRouter.get("/courses/delete/:id", controllers.api.v1.coursesController.delete);
apiRouter.get("/courses/:id", controllers.api.v1.coursesController.getById);

// CRUD for Users
apiRouter.get("/users/list", controllers.api.v1.usersController.list);
apiRouter.post("/users/add", bodyValidation.nameValidate, bodyValidation.authValidate, validate.validate, controllers.api.v1.usersController.addNew);
apiRouter.post("/users/update/:id", bodyValidation.nameValidate, bodyValidation.authValidate, validate.validate, controllers.api.v1.usersController.update);
apiRouter.get("/users/delete/:id", controllers.api.v1.usersController.delete);
apiRouter.get("/users/:id", controllers.api.v1.usersController.getById);

// CRUD for User Courses
apiRouter.get("/user-courses/list", controllers.api.v1.userCoursesController.list);
apiRouter.post("/user-courses/add", bodyValidation.userCoursesValidate, validate.validate, controllers.api.v1.userCoursesController.addNew);
apiRouter.post("/user-courses/update/:id", bodyValidation.userCoursesValidate, validate.validate, controllers.api.v1.userCoursesController.update);
apiRouter.get("/user-courses/delete/:id", controllers.api.v1.userCoursesController.delete);
apiRouter.get("/user-courses/:id", controllers.api.v1.userCoursesController.getById);

apiRouter.get("/api/v1/errors", () => {
  throw new Error(
    "Something gone wrong."
  );
});

apiRouter.use(controllers.api.main.onLost);
apiRouter.use(controllers.api.main.onError);


module.exports = apiRouter;
