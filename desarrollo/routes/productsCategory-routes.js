const express = require("express");
const router = express.Router();
const productsCategoryController = require("../controllers/productsCategory-controller");
const createCategoriesValidation = require("../validations/create-category");
const editCategoriesValidation = require("../validations/edit-category");

// Middlewares para imagenes
const uploadCategoria = require("../middlewares/multerCategory");

// Lista las categorias
router.get("/list", productsCategoryController.list);

// Editar categoria
router.get("/edit/:id", productsCategoryController.edit);

// Actualiza de categoria
router.put("/:id", uploadCategoria.single("imagen"),editCategoriesValidation, productsCategoryController.update); 

// Vista formulario de creacion categoria
router.get("/create/", productsCategoryController.create); 
router.post("/", uploadCategoria.single("imagen"),createCategoriesValidation, productsCategoryController.store); 

// Borrado de categoria
router.delete("/:id", productsCategoryController.destroy)

module.exports = router;
