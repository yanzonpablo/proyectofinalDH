const { body } = require("express-validator");

module.exports = [
    body("nombre").isLength({ min: 3 }).withMessage("* El nombre debe contener un mínimo tres caracteres"),
    body("descripcion").isLength({ min: 3 }).withMessage("* La descripción debe contener al menos tres carácteres"),
    body("imagen").custom((element) => {
      if (element != undefined) {
        return true;
      } else {
        throw new Error("* Debe agregar una imagen");
      }
    })
  ];