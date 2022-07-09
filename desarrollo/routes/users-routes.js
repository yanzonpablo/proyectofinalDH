const path = require("path");
const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users-controller");
const registerValidation = require("../validations/register-validations");


// Middlewares
const upload = require("../middlewares/multer"); // SE ENCUENTRA CON MALA UBICACION DE ARCHIVOS Y NOMBRE

/* // Login
router.get("/login", usersController.showLogin); // Vista formulario Login
router.post("/login", usersController.login); // POST ingreso a sesion usuario

//Crear usuario
router.get("/register", usersController.showRegister); // Vista formulario de registro
router.post("/register", registerValidation, usersController.register); // POST de creacion de usuario */

//Lista de usuarios
router.get("/list", usersController.list);

//Detalle de usuario
router.get("/:id/", usersController.details); //Vista detalle de usuario

//Edicion de usuario
router.get("/edit/:id", usersController.edit); // Vista de edicion de usuario
router.put("/:id", upload.single("imagen"), usersController.update); // PUT de edicion de usuario

//Elimina usuario
router.delete("/:id", usersController.destroy); // Elimina usuario

module.exports = router;
