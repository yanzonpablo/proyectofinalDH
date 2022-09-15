const { Router } = require("express");
const express = require("express");
const router = express.Router();
const productsController = require("../controllers/products-controller");


// Middlewares
const uploadProduct = require("../middlewares/multerProduct");
const validateProductId = require("../middlewares/validate-product-id");
const productsValidation = require("../validations/create-edit-validations");

//LIST
router.get("/list", productsController.index); //Listado de productos
// BUSCAR PRODUCTO
router.post("/search", productsController.search);
//CREATE
router.get("/create/", productsController.create); //Vista formulario de creacion
router.post("/", uploadProduct.single("imagen"),productsValidation, productsController.store); //POST de creacion de producto
//EDIT
router.get("/edit/:id", productsController.edit); //Vista de edicion de producto
router.put("/:id", uploadProduct.single("imagen"),productsValidation, productsController.update); //PUT de edicion de producto
//DELETE
router.delete("/:id", productsController.destroy); //DELETE de producto
//DETAILS
router.get("/:id/", validateProductId, productsController.details); //Vista detalle de producto


module.exports = router;
