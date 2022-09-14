const express = require("express");
const apiProductsController = require("../../controllers/API/productsAPIController");
const router = express.Router();

// API products 
router.get("/",apiProductsController.list);
router.get("/:id",apiProductsController.detail);

module.exports = router;