const express = require("express");
const router = express.Router();

const productsRouter = require("./products-routes");
const usersRouter = require("./users-routes");
const mainController = require("../controllers/main-controller");
const authRouter = require("./auth-router");


router.get("/", mainController.home);
router.get("/cart", mainController.cart);
router.get("/envio", mainController.envio);
router.get("/pago", mainController.pago);
router.use(authRouter);
router.use("/products", productsRouter);
router.use("/user", usersRouter);

module.exports = router;
