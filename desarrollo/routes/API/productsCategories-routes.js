const express = require("express");
const router = express.Router();
const productsCategoryController = require("../../controllers/API/productsCategoriesAPIController");


//Lista de usuarios
router.get("/", productsCategoryController.list);

module.exports = router