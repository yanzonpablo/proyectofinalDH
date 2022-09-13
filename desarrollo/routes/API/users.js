const express = require("express");
const router = express.Router();
const usersAPIController = require("../../controllers/API/usersAPIController");
const authMiddleware = require("../../middlewares/authMiddleware");

// Middlewares
const uploadUser = require("../../middlewares/multerUser");

//Lista de usuarios
router.get("/", usersAPIController.list);

//Detalle de usuario
router.get("/:id/", authMiddleware, usersAPIController.perfil); //Vista detalle de usuario

//Crear usuario
// router.post("/", usersAPIController.create);

//Edicion de usuario
// router.get("/edit/:id", usersAPIController.edit); // Vista de edicion de usuario
// router.put("/:id", uploadUser.single("imagen"), usersAPIController.update); // PUT de edicion de usuario
// router.put("/sub/:id", usersAPIController.subscribe) // PUT para cambio de categoria a subscriptor

//Elimina usuario
// router.delete("/:id", usersAPIController.destroy); // Elimina usuario

module.exports = router;