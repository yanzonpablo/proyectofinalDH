const { body } = require("express-validator");

module.exports = [
    body("nombre").isLength({ min: 3 }).withMessage("* El nombre debe contener un mínimo tres caracteres"),
    body("descripcion").isLength({ min: 3 }).withMessage("* La descripción debe contener al menos tres carácteres"),
  ];