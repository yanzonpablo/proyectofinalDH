const path = require("path");
const express = require("express");
const db = require("../models/db");
const user = require('../models/user');

const usuariosFilePath = path.join(__dirname, "../data/users.json"); // Path usuarios para formularios
const allUsers = db.readJsonDB(usuariosFilePath);

module.exports = {
  login: (req, res) => {
    // formulario login
    res.render("login");
  },
  entry: (req, res) => {
    res.render("index");
  },
  profile: (req, res) => {
    // muestra datos al usuario de su perfil
  },
  list: (req, res) => {
    // Muestra lista de usuarios registrados
    res.render("users-list", {
      usuarios: allUsers,
    });
  },
  details: (req, res) => {
    // Muestra datos usuario registrado
  },
  register: (req, res) => {
    // Formulario registro de usuario
    res.render("register");
  },
  store: (req, res) => {
    // Guarda datos del form crear usuario
    user.create(req.body);
    return res.send('se guardo el usuario')
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
