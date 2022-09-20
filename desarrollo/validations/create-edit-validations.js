const { body } = require("express-validator");

module.exports = [
    body("nombre").isLength({ min: 5 }).withMessage("* El nombre debe tener al menos cinco caracteres"),
    body("descripcion").isLength({ min: 20 }).withMessage("* La descripción debe tener al menos veinte carácteres"),
    body("precio").custom(value=>{ if((value <= 0) || (value == "0")){throw new Error ("* El precio no puede ser 0 o negativo")}else{return true}}),
    body("descuento").custom(value=>{if((value >= 100) || (value <0)){throw new Error ("* El descuento no puede ser del 100% o mayor")}else{return true}}),
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