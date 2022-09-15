const express = require("express");
const router = express.Router();
const productsCategoryController = require("../controllers/productsCategory-controller");
const createCategoriesValidation = require("../validations/create-category");
const editCategoriesValidation = require("../validations/edit-category");
const accessMiddleware = require("../middlewares/accessMiddleware")


// Middlewares para imagenes
const uploadCategoria = require("../middlewares/multerCategory");

// Lista las categorias
router.get("/list", accessMiddleware, productsCategoryController.list);

// Editar categoria
router.get("/edit/:id", accessMiddleware, productsCategoryController.edit);

// Actualiza de categoria
router.put("/:id", uploadCategoria.single("imagen"),accessMiddleware,editCategoriesValidation, productsCategoryController.update); 

// Vista formulario de creacion categoria
router.get("/create/", accessMiddleware, productsCategoryController.create); 
router.post("/", uploadCategoria.single("imagen"),accessMiddleware,createCategoriesValidation, productsCategoryController.store); 

// Borrado de categoria
router.delete("/:id", accessMiddleware,productsCategoryController.destroy)

module.exports = router;
