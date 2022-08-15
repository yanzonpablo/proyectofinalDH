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
