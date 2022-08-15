const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users-controller");
const authMiddleware = require("../middlewares/authMiddleware");

// Middlewares
const uploadUser = require("../middlewares/multerUser");

//Lista de usuarios
router.get("/list", usersController.list);
//Detalle de usuario
router.get("/:id/", authMiddleware, usersController.details); //Vista detalle de usuario
//Edicion de usuario
router.get("/edit/:id", usersController.edit); // Vista de edicion de usuario
router.put("/:id", uploadUser.single("imagen"), usersController.update); // PUT de edicion de usuario
/*
//Elimina usuario
router.delete("/:id", usersController.destroy); // Elimina usuario
*/
module.exports = router;
