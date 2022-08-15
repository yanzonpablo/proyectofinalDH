/* 
const path = require("path");
const db = require("../models/db");
const usersFS = require("../models/db-users");

const usuariosFilePath = path.join(__dirname, "../data/users.json"); // Path usuarios para formularios
const categoriesFilePath = path.join(__dirname, "../data/users-category.json"); //Path categorias de usuarios
const allUsers = db.readJsonDB(usuariosFilePath);
const allCategories = db.readJsonDB(categoriesFilePath); */
const db = require("../database/models");

module.exports = {
  list: (req, res) => {
    // Muestra lista de usuarios registrados
    db.Users.findAll().then((usuario) => {
      res.render("users-list", {
        usuario,
      });
    });
  },
  /* 
  details: (req, res) => {
    // Muestra datos usuario registrado
    let id = req.params.id;
    let userProfile = allUsers.find((usuario) => usuario.id == id);
    res.render("perfil", { usuario: userProfile });
  },
  */
  edit: (req, res) => {
    // Edita datos de usuario
    db.UserCategories.findAll().then((categorias) => {
      db.Users.findByPk(req.params.id).then((usuario) => {
        res.render("edit-user", {
          usuario,
          categorias,
        });
      });
    });
  },
  update: (req, res) => {
    // Actualiza datos de usuario
    db.Users.update(
      {
        ...req.body,
      },
      {
        where: { id: req.params.id },
      }
    ).then(() => {
      res.redirect("/user/list");
    });
    /* 
    if (req.file) {
      const pathAbsolute = path.join(__dirname, "../public", user.imagen);
      fs.unlinkSync(pathAbsolute);
      user.imagen = req.file.filename;
    }
    usersFS.saveAll(allUsers);
    res.redirect("/details");
    */
  },
  /*
  destroy: (req, res) => {
    // Borra usuario
  },
   */
};
