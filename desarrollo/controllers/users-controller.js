const path = require("path");
const express = require("express");
const db = require("../models/db");

const provinciasFilePath = path.join(__dirname, "../data/provincias.json"); // Path provincias para formularios
const allProvincias = db.readJsonDB(provinciasFilePath); // Metodo para leer JSON

module.exports = {
  login: (req, res) => {
    // formulario login
    res.render("login");
  },
  ingresar: (req, res) => {
    res.render("index")
  },
  profile: (req, res) => {
    // muestra datos al usuario de su perfil
  },
  list: (req, res) => {
    // Muestra lista de usuarios registrados
  },
  details: (req, res) => {
    // Muestra datos usuario registrado
  },
  register: (req, res) => {
    // Formulario registro de usuario
    res.render("register", {
      provincias: allProvincias,
    });
  },
  store: (req, res) => {
    // Guarda datos del form crear usuario
  },
  edit: (req, res) => {
    // Edita datos de usuario
  },
  update: (req, res) => {
    // Actualiza datos de usuario
  },
  destroy: (req, res) => {
    // Borra usuario
  },
};
