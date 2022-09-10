const express = require("express");
const router = express.Router();

const productsRouter = require("./products-routes");
const usersRouter = require("./users-routes");
const mainController = require("../controllers/main-controller");
const authRouter = require("./auth-router");
const apiRouter = require("../routes/API/users")

router.get("/", mainController.home);

router.get("/cart/:id", mainController.cart);

router.get("/envio", mainController.envio);
router.post("/envio", mainController.datosEnvio);

router.get("/pago", mainController.pago);
router.use(authRouter);
router.use("/products", productsRouter);
router.use("/user", usersRouter);
router.use("/api/user", apiRouter);

module.exports = router;
