const express = require("express");
const router = express.Router();
const productsCategoryController = require("../controllers/productsCategory-controller");

// Middlewares para imagenes
const uploadCategoria = require("../middlewares/multerCategory");

// Lista las categorias
router.get("/list", productsCategoryController.list);

// Editar categoria
router.get("/edit/:id", productsCategoryController.edit);

// Actualiza de categoria
router.put("/:id", uploadCategoria.single("imagen"), productsCategoryController.update); 

// Vista formulario de creacion categoria
router.get("/create/", productsCategoryController.create); 
router.post("/", uploadCategoria.single("imagen"), productsCategoryController.store); 

// Borrado de categoria
router.delete("/:id", productsCategoryController.destroy)

module.exports = router;
