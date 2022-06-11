const path = require("path");
const express = require("express");
const router = express.Router();

const productsController = require("../controllers/products-controller");

router.get("/create", productsController.create);
router.get("/:id", productsController.details);
router.post("/create", productsController.store);
router.get("/:id/edit", productsController.edit);
router.put("/:id/edit", productsController.update);
router.get("/:id/delete", productsController.delete);

module.exports = router;
