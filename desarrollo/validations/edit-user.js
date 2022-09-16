const { body } = require("express-validator");

module.exports = [
  body("nombre").isLength({ min: 2 }).withMessage("* El nombre debe tener al menos dos caracteres"),
  body("apellido").isLength({ min: 2 }).withMessage("* El apellido debe tener al menos dos carácteres"),
  body("email").isEmail().withMessage("* Debe introducir un email valido"),
];
