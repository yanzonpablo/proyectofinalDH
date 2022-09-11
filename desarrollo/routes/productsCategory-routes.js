const express = require("express");
const router = express.Router();
const productsCategoryController = require("../controllers/productsCategory-controller");

// Middlewares
const uploadCategoria = require("../middlewares/multerCategory");

//Lista las categorias
router.get("/list", productsCategoryController.list);
//Editar categoria
router.get("/edit/:id", productsCategoryController.edit);
// Edicion de categoria
router.put("/:id", uploadCategoria.single("imagen"), productsCategoryController.update); 




module.exports = router;
