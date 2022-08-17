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
  details: (req, res) => {
    // Muestra datos usuario registrado
    db.Users.findOne({ where: { id: req.params.id } }).then((usuario) => {
      res.render("perfil", { usuario });
    });
  },
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
    db.Users.findByPk(req.params.id).then((user) => {
      user.set({
        ...req.body,
        password: bcrypt.hashSync(req.body.password, 10),
      });
      if (req.file) {
        user.imagen = req.file.filename;
      }
      user.save().then(() => {
        res.redirect("/user/list");
      });
    });
  },
  destroy: (req, res) => {
    db.Users.findByPk(req.params.id).then((user) => {
      user.setUserCategories().then(() => {
        user.destroy().then(() => {
          res.redirect("/user/list");
        });
      });
    });
  },
};
