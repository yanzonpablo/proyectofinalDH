const { body } = require("express-validator");

module.exports = [
    body("nombre_apellido").notEmpty(),
    body("email").isEmail0(),
    body("password").isLength(8).isAlphanumeric(),
    body("rePassword").custom((valor, extra) => {
        if (valor !== extra.req.body.password) {
            throw new Error("Las contraseñas no coinciden");
        }
        return true;
    }),
    body("terms").notEmpty()
]