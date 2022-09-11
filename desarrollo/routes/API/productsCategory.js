const express = require("express");
const router = express.Router();
const productsCategoryController = require("../../controllers/api/productsCategory");
const authMiddleware = require("../../middlewares/authMiddleware");

// Middlewares
const uploadUser = require("../../middlewares/multerUser");

//Lista de usuarios
router.get("/list", productsCategoryController.list);