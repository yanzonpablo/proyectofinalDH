const path = require("path");
const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products-controller");

//LIST
router.get("/", productsController.index); //Listado de productos
//CREATE
router.get("/create/", productsController.create); //Vista formulario de creacion
router.post("/", productsController.store); //POST de creacion de producto
//EDIT
router.get("/edit/:id", productsController.edit); //Vista de edicion de producto
router.put("/:id", productsController.update); //PUT de edicion de producto
//DETAILS
router.get("/:id/", productsController.details); //Vista detalle de producto

// router.delete("/:id", productsController.destroy);

module.exports = router;
