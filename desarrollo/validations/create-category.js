const { body } = require("express-validator");

module.exports = [
    body("nombre").isLength({ min: 3 }).withMessage("* El nombre debe contener un mínimo tres caracteres"),
    body("descripcion").isLength({ min: 3 }).withMessage("* La descripción debe contener al menos tres carácteres"),
    body("imagen").custom((element,{req}) => {
      const validImg = ["image/png","image/jpg","image/jpeg","image/gif"]
      if (!req.file) {
        throw new Error ("* Tienes que subir una imagen para la categoria")
      } else {
        const fileExt = req.file.mimetype;
        if(!validImg.includes(fileExt)) {
          throw new Error("* La imagén solo puede ser de las siguientes extensiones '.png','.jpg','.jpeg','.gif'");
        }
      }
      return true
    })
  ];