const { body } = require("express-validator");

module.exports = [
  body("nombre").isLength({ min: 2 }).withMessage("* El nombre debe tener al menos dos caracteres"),
  body("apellido").isLength({ min: 2 }).withMessage("* El apellido debe tener al menos dos carácteres"),
  body("email").isEmail().withMessage("* Debe introducir un email valido"),
  body("password")
    .isStrongPassword()
    .withMessage("* La contraseña debe tener al menos 8 caracteres, una letra mayúsculas, una minúscula y un carácter especial"),
  body("rePassword").custom((valor, extra) => {
    if (valor == undefined) {
      throw new Error("* Debe confirmar su contraseña");
    }
    if (valor !== extra.req.body.password) {
      throw new Error("* Las contraseñas no coinciden");
    }
    return true;
  }),
  body("terms").custom((value) => {
    if (value != undefined) {
      return true;
    } else {
      throw new Error("* Debe aceptar los términos y condiciones");
    }
  }),
  body("imagen").custom((element,{req}) => {
    const validImg = ["image/png","image/jpg","image/jpeg","image/gif"]
    if (req.file) {
      const fileExt = req.file.mimetype;
      console.log(fileExt)
      if(validImg.includes(fileExt)) {
        return true
      }else{
        throw new Error("* La imagén solo puede ser de las siguientes extensiones '.png','.jpg','.jpeg','.gif'");
      }
    }
    return true
  })
];
