const db = require("../database/models"); // Require de models de Sequelize
const bcrypt = require("bcryptjs"); // Cifrado de passwords
const { validationResult } = require("express-validator"); // Uso de Express-Validator

module.exports = {
  list: (req, res) => {
    // Muestra lista de usuarios registrados
    db.Users.findAll().then((usuario) => {
      res.render("users-list", {
        usuario,
      });
    });
  },
  perfil: (req, res) => {
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
          userToEdit: usuario,
          categorias: categorias,
        });
      });
    });
  },
  update: (req, res) => {
    // Actualiza datos de usuario
    const resultValidation = validationResult(req);
    if (!resultValidation.isEmpty()) {
      db.UserCategories.findAll().then((categorias)=>{
        db.Users.findByPk(req.params.id).then(usuario=>{
          res.render("edit-user",{
            errors: resultValidation.mapped(),
            userToEdit: usuario,
            categorias
          })
        })
      })
      return
    }
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
  subscribe: (req, res) => {
    // Actualiza datos de usuario
    db.Users.findByPk(req.params.id).then((user) => {
      user.set({
        idUsuarioCategorias: 2,
      });
      user.save().then(() => {
        res.redirect("/");
      });
    });
  },
  destroy: (req, res) => {
    db.Users.destroy({
      where: {
        id: req.params.id, 
      },
    }).then(() => {
      res.redirect("/user/list"); 
    })
    // db.Users.findByPk(req.params.id).then((user) => {
    //   user.setUserCategories().then(() => {
    //     user.destroy().then(() => {
    //       res.redirect("/user/list");
    //     });
    //   });
    // });
  },
};
