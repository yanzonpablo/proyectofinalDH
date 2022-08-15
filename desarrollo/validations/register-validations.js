const { body } = require("express-validator");

module.exports = [
  body("nombre").notEmpty().withMessage("El campo no puede estar vacío"),
  body("apellido").notEmpty().withMessage("El campo no puede estar vacío"),
  body("email").isEmail().withMessage("Debe introducir un email valido"),
  body("password")
    .isLength({ min: 8 })
    .withMessage("La contraseña debe tener al menos 8 caracteres"),
  body("rePassword").custom((valor, extra) => {
    if (valor == undefined) {
      throw new Error("Debe confirmar su contraseña");
    }
    if (valor !== extra.req.body.password) {
      throw new Error("Las contraseñas no coinciden");
    }
    return true;
  }),
  body("terms").custom((value) => {
    if (value != undefined) {
      return true;
    } else {
      throw new Error("Debe aceptar los términos y condiciones");
    }
  }),
];
