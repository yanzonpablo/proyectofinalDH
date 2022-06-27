const path = require("path");
const express = require("express");
const router = express.Router();

const productsRouter = require("./products-routes");
const mainController = require("../controllers/main-controller");
const usersRouter = require("../controllers/users-controller");

router.get("/", mainController.home);
router.get("/login", mainController.login);
// router.get("/register", mainController.register);
router.get("/cart", mainController.cart);
router.get("/envio", mainController.envio);
router.get("/pago", mainController.pago);

router.use("/products", productsRouter);
router.use("/register", usersRouter);
module.exports = router;
