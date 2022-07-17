const express = require("express");

const authController = require("../controllers/auth-controller");
const registerValidation = require("../validations/register-validations");

const upload = require("../middlewares/multer");


const router = express.Router();

router.get("/login", authController.showLogin);
router.post("/login", authController.login);
router.get("/register", authController.showRegister);
router.post("/register", registerValidation, upload.single('imagen'), authController.register);

module.exports = router;
