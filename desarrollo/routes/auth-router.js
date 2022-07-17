const express = require("express");

const { body } = require("express-validator")
const upload = require("../middlewares/multer");

const authController = require("../controllers/auth-controller");
const registerValidation = require("../validations/register-validations");
const guestMiddleware = require("../middlewares/guestMiddleware");

const router = express.Router();

router.get("/login", guestMiddleware, authController.showLogin);
router.post("/login", authController.login);
router.get("/register", guestMiddleware, authController.showRegister);
router.post("/register", upload.single('imagen'), registerValidation, authController.register);
router.get("/logout", authController.logout);

module.exports = router;
