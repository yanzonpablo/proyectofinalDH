const express = require("express");
const router = express.Router();

const productsRouter = require("./products-routes");
const usersRouter = require("./users-routes");
const mainController = require("../controllers/main-controller");
const authRouter = require("./auth-router");
const productsCategoryRouter = require("./productsCategory-routes");
const apiMainRouter = require("../routes/API/api-main-routes")
const cartRouter = require("./cart-routes");


router.get("/", mainController.home);
router.get("/envio", mainController.envio);
router.post("/envio", mainController.datosEnvio);
router.get("/pago", mainController.pago);

router.use(authRouter);
// router.use("/cart", cartRouter);
router.use("/products", productsRouter);
router.use("/user", usersRouter);
router.use("/category", productsCategoryRouter);

// Router de APIs
router.use("/api/", apiMainRouter);

module.exports = router;
