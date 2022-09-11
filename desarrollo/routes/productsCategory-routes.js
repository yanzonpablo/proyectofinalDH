const express = require("express");
const router = express.Router();
const productsCategoryController = require("../controllers/productsCategory-controller");

//Lista las categorias
router.get("/list", productsCategoryController.list);


module.exports = router;
