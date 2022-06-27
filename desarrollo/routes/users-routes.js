const path = require("path");
const express = require("express");
const router = express.Router();
const userController = require("../controllers/users-controller");

//LIST
router.get("/", userController.index); // Listado de usuarios

//DETAILS
router.get("/:id/", userController.details); //Vista detalle de usuarios

//CREATE
router.get("/create/", userController.create); // Vista formulario de creacionde usuarios
router.post("/", userController.store); // POST de creacion de usuario

//EDIT
router.get("/edit/:id", userController.edit); // Vista de edicion de usuarios
router.put("/:id", userController.update); // PUT de edicion de usuarios

//DELETE
router.delete("/:id", userController.destroy); // elimina usuarios


module.exports = router;
