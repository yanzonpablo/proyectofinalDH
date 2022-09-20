const { body } = require("express-validator");

module.exports = [
    body("nombre").isLength({ min: 3 }).withMessage("* El nombre debe contener un mínimo tres caracteres"),
    body("descripcion").isLength({ min: 3 }).withMessage("* La descripción debe contener al menos tres carácteres"),
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