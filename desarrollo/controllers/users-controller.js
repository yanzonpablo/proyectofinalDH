const path = require("path");
const db = require("../models/db");
const user = require("../models/user");
const usersFS = require("../models/db-users");
const { validationResult } = require("express-validator");

const usuariosFilePath = path.join(__dirname, "../data/users.json"); // Path usuarios para formularios
const categoriesFilePath = path.join(__dirname, "../data/users-category.json"); //Path categorias de usuarios
const allUsers = db.readJsonDB(usuariosFilePath);
const allCategories = db.readJsonDB(categoriesFilePath);

module.exports = {
  // showLogin: (req, res) => {
  //   // formulario login
  //   res.render("login");
  // },
  // login: (req, res) => {
  //   res.render("index");
  // },
  // showRegister: (req, res) => {
  //   // Formulario registro de usuario
  //   res.render("register");
  // },
  // register: (req, res) => {
  //   // Guarda datos del form crear usuario
  //   const errors = validationResult(req);
  //   if (!errors.isEmpty()) {
  //       res.render("register", {
  //           errors: errors.mapped(),
  //       });
  //       return;
  //   }
  //   user.create(req.body);
  //   return res.send("se guardo el usuario");
  // },
  list: (req, res) => {
    // Muestra lista de usuarios registrados
    res.render("users-list", {
      usuarios: allUsers,
    });
  },
  details: (req, res) => {
    // Muestra datos usuario registrado
    res.send("Vista en proceso: user-profile");
  },
  edit: (req, res) => {
    let id = req.params.id;
    let userToEdit = allUsers.find((usuario) => usuario.id == id);
    res.render("edit-user", {
      usuario: userToEdit,
      categorias: allCategories,
    });
    // Edita datos de usuario
  },
  update: (req, res) => {
    // Actualiza datos de usuario
    const user = allUsers[allUsers.findIndex((u) => u.id == req.params.id)];

    user.nombre_apellido = req.body.nombre_apellido;
    user.email = req.body.email;
    user.password = req.body.password;
    user.domicilio = req.body.domicilio;
    user.ciudad = req.body.ciudad;
    user.categoria = req.body.categoria;

    if (req.file) {
      const pathAbsolute = path.join(__dirname, "../public", user.imagen);
      fs.unlinkSync(pathAbsolute);
      user.imagen = req.file.filename;
    }
    usersFS.saveAll(allUsers);
    res.redirect("/details");
  },
  destroy: (req, res) => {
    // Borra usuario
  },
};
