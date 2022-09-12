const express = require("express");
const router = express.Router();

const apiUserRouter = require("../API/users")
const apiProductRouter = require("../API/products-routes")
const apiCategoriesRouter = require("../API/productsCategories-routes")

// Routers de APIs propias
router.use("/user", apiUserRouter);
router.use("/products", apiProductRouter);
router.use("/categories", apiCategoriesRouter);


module.exports = router;