const path = require("path");
const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products-controller");

router.get("/create", productsController.create);
router.get("/:id/", productsController.details);
router.post("/", productsController.store);
router.get("/edit/:id", productsController.edit);
router.put("/:id", productsController.update);
// router.delete("/:id", productsController.destroy);

module.exports = router;
