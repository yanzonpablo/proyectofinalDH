const express = require("express");
const router = express.Router();
const productsCategoryController = require("../../controllers/API/productsCategoryController");


//Lista de usuarios
router.get("/list", productsCategoryController.list);