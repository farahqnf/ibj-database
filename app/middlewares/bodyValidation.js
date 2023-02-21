const { body } = require("express-validator");

module.exports = {
    
  nameValidate: [
    body("name").notEmpty().withMessage({
      code: "E-001",
      message: "Name can't be empty",
    }),
  ],
  
  authValidate: [
    body("email").notEmpty().withMessage({
      code: "E-002",
      message: "Email can't be empty",
    }),
    body("email").isEmail().withMessage({
      code: "E-003",
      message: "Email invalid",
    }),
    body("password").notEmpty().withMessage({
      code: "E-004",
      message: "Password can't be empty",
    }),
  ],

  coursesValidate: [
    body("title").notEmpty().withMessage({
      code: "E-005",
      message: "Title can't be empty",
    }),
    body("course_category_id").notEmpty().withMessage({
      code: "E-006",
      message: "Id Course Category can't be empty",
    }),
  ],

  userCoursesValidate: [
    body("users_id").notEmpty().withMessage({
      code: "E-007",
      message: "Id User can't be empty",
    }),
    body("course_id").notEmpty().withMessage({
      code: "E-008",
      message: "Id Course can't be empty",
    }),
  ],

};
