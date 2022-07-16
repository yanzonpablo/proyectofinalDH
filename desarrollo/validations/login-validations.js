const { body } = require("express-validator");

module.exports = [
    body("email").isEmail().withMessage("Debe introducir un email valido"),
    body("password").isLength({min: 8}).withMessage("La contraseña debe tener al menos 8 caracteres")
]