const path = require("path");
const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users-controller");

// Middlewares
const upload = require("../models/multer");

// Login
router.get("/login", usersController.login); // Vista formulario Login
router.post("/login", usersController.entry); // POST ingreso a sesion usuario

//Crear usuario
router.get("/register", usersController.register); // Vista formulario de registro
router.post("/register", upload.single("imagen_producto"), usersController.store); // POST de creacion de usuario

//Lista de usuarios
router.get("/list", usersController.list);

//Detalle de usuario
router.get("/:id/", usersController.details); //Vista detalle de usuario

//Edicion de usuario
router.get("/edit/:id", usersController.edit); // Vista de edicion de usuario
router.put("/:id", usersController.update); // PUT de edicion de usuario

//Muestra al usuarios datos de su perfil
router.get("/profile/:userid", usersController.profile);

//Elimina usuario
router.delete("/:id", usersController.destroy); // Elimina usuario

module.exports = router;
