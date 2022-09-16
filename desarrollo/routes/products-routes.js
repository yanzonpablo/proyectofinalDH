const { Router } = require("express");
const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products-controller");


// Middlewares
const uploadProduct = require("../middlewares/multerProduct");
const validateProductId = require("../middlewares/validate-product-id");
const productsValidation = require("../validations/create-edit-validations");
const accessMiddleware = require("../middlewares/accessMiddleware")

//LIST
router.get("/list", accessMiddleware, productsController.index); //Listado de productos
// BUSCAR PRODUCTO
router.post("/search", productsController.search);
// BUSQUEDA POR CATEGORIA
router.get("/category/:id", productsController.category)
//CREATE
router.get("/create/",accessMiddleware, productsController.create); //Vista formulario de creacion
router.post("/",accessMiddleware, uploadProduct.single("imagen"),productsValidation, productsController.store); //POST de creacion de producto
//EDIT
router.get("/edit/:id", accessMiddleware, productsController.edit); //Vista de edicion de producto
router.put("/:id",accessMiddleware, uploadProduct.single("imagen"),productsValidation, productsController.update); //PUT de edicion de producto
//DELETE
router.delete("/:id",accessMiddleware, productsController.destroy); //DELETE de producto
//DETAILS
router.get("/:id/", validateProductId, productsController.details); //Vista detalle de producto


module.exports = router;
