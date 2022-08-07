const path = require("path");
const db = require("../models/db");
const usersFS = require("../models/db-users");

const usuariosFilePath = path.join(__dirname, "../data/users.json"); // Path usuarios para formularios
const categoriesFilePath = path.join(__dirname, "../data/users-category.json"); //Path categorias de usuarios
const allUsers = db.readJsonDB(usuariosFilePath);
const allCategories = db.readJsonDB(categoriesFilePath);

module.exports = {
  list: (req, res) => {
    // Muestra lista de usuarios registrados
    res.render("users-list", {
      usuarios: allUsers,
    });
  },
  details: (req, res) => {
    // Muestra datos usuario registrado
    res.render("perfil");
  },
  edit: (req, res) => {
    // Edita datos de usuario
    let id = req.params.id;
    let userToEdit = allUsers.find((usuario) => usuario.id == id);
    res.render("edit-user", {
      usuario: userToEdit,
      categorias: allCategories,
    });
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
