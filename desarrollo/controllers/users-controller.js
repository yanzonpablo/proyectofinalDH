const path = require("path");
const express = require("express");
const db = require("../models/db");
const provinciasFilePath = path.join(__dirname, "../data/provincias.json"); // Path provincias para formularios
const allProvincias = db.readJsonDB(provinciasFilePath);

module.exports = {
    
index: (req, res) => {
    res.render("register", {
    provincias: allProvincias
    });
  },
details: (req, res) => { // muestra datos usuario registrados

},
create: (req, res) => { // direcciona form crear usuarios

},
store: (req, res) => { //guarda datos del form usuarios

},
edit: (req, res) => { // edita datos de usuarios

},
update: (req, res) => { // actualiza datos de usuarios

},
destroy: (req, res) => { // borra usuarios

},

};