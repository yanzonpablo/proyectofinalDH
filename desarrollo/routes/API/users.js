const express = require("express");
const router = express.Router();
const usersAPIController = require("../../controllers/API/usersAPIController");

//Lista de usuarios
router.get("/", usersAPIController.list);

//Detalle de usuario
router.get("/:id/", usersAPIController.detail); //Vista detalle de usuario


module.exports = router;