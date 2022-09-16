// Express y Router
const express = require("express");
const router = express.Router();
// Controlador
const usersController = require("../controllers/users-controller");

// Middlewares
const uploadUser = require("../middlewares/multerUser");
const authMiddleware = require("../middlewares/authMiddleware");
const accessMiddleware = require("../middlewares/accessMiddleware");
const editValidation = require("../validations/edit-user");

//Lista de usuarios
router.get("/list",accessMiddleware, usersController.list);
//Detalle de usuario
router.get("/:id/", authMiddleware, usersController.perfil); //Vista detalle de usuario
//Edicion de usuario
router.get("/edit/:id",accessMiddleware, usersController.edit); // Vista de edicion de usuario
router.put("/:id", uploadUser.single("imagen"),editValidation, accessMiddleware,usersController.update); // PUT de edicion de usuario
router.put("/sub/:id", usersController.subscribe) // PUT para cambio de categoria a subscriptor
//Elimina usuario
router.delete("/:id", accessMiddleware,usersController.destroy); // Elimina usuario

module.exports = router;
