const express = require("express");
const { body } = require("express-validator");
const uploadUser = require("../middlewares/multerUser");
const authController = require("../controllers/auth-controller");
const registerValidation = require("../validations/register-validations");
const guestMiddleware = require("../middlewares/guestMiddleware");

const router = express.Router();

router.get("/login", guestMiddleware, authController.showLogin);
router.post("/login", authController.login);
router.get("/register", guestMiddleware, authController.showRegister);
router.post(
  "/register",
  uploadUser.single("imagen"),
  registerValidation,
  authController.register
);
router.get("/logout", authController.logout);

module.exports = router;
