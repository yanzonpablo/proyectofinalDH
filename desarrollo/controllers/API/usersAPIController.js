const db = require("../../database/models");
const bcrypt = require("bcryptjs");

module.exports = {
  list: (req, res) => {
    // Muestra lista de usuarios registrados
    db.Users
      .findAll()
      .then(usuario => {
        return res.status(200).json({ total: usuario.length, data: usuario, status: 200 });
    });
  },
  perfil: (req, res) => {
    // Muestra datos usuario registrado
    db.Users
      .findOne({ where: { id: req.params.id } })
      .then((usuario) => {
        return res.status(200).json({ data: usuario, status: 200 });
    });
  },
   create: (req,res) => {
     db.Users.create(req.body)
     .then((usuario) => {
         return res.status(200).json({ data: usuario, status: 200, created: "ok" });});
   },
  edit: (req, res) => {
    // Edita datos de usuario
    db.UserCategories.findAll().then((categorias) => {
      db.Users.findByPk(req.params.id).then((usuario) => {
        res.render("edit-user", {
          userToEdit: usuario,
          categorias: categorias,
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
        res.render("/user-list");
      });
    });
  },
  destroy: (req, res) => {
    db.Users.destroy({
      where: {
        id: req.params.id, 
      },
    }).then(response => {
      return res.status(200).json(response);
  });
  },
};