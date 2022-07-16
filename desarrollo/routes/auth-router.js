const express = require("express");

const authController = require("../controllers/auth-controller");
const registerValidation = require("../validations/register-validations");
const loginValidation = require("../validations/login-validations");

const router = express.Router();

router.get("/login", authController.showLogin);
router.post("/login", authController.login);
router.get("/register", loginValidation, authController.showRegister);
router.post("/register", registerValidation, authController.register);

module.exports = router;
