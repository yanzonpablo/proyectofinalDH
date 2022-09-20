const { body } = require("express-validator");

module.exports = [
  body("nombre").isLength({ min: 2 }).withMessage("* El nombre debe tener al menos dos caracteres"),
  body("apellido").isLength({ min: 2 }).withMessage("* El apellido debe tener al menos dos carácteres"),
  body("email").isEmail().withMessage("* Debe introducir un email valido"),
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
