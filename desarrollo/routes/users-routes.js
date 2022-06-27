const path = require("path");
const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users-controller");

//LIST
router.get("/", usersController.list);

//DETAILS
router.get("/:id/", usersController.details); //Vista detalle de usuarios

//CREATE
router.get("/create/", usersController.index); // Vista formulario de creacionde usuarios
router.post("/", usersController.store); // POST de creacion de usuario

//EDIT
router.get("/edit/:id", usersController.edit); // Vista de edicion de usuarios
router.put("/:id", usersController.update); // PUT de edicion de usuarios

//DELETE
router.delete("/:id", usersController.destroy); // elimina usuarios


module.exports = router;
