const path = require("path");
const express = require("express");
const router = express.Router();

const mainController = require("../controllers/main-controller");

router.get("/", mainController.home);
router.get("/login", mainController.login);
router.get("/register", mainController.register);
router.get("/cart", mainController.cart);
router.get("/product", mainController.product);
router.get("/envio", mainController.envio);
router.get("/pago", mainController.envio);

module.exports = router;
