const db = require("../database/models");

module.exports = {
  list: (req, res) => {
    // Muestra lista de usuarios registrados
    db.ProductsCategories.findAll().then((categories) => {
      res.render("productsCategory", { categories });
    });
  },
  // edit: (req, res) => {
  //   // Edita datos de usuario
  //   db.UserCategories.findAll().then((categorias) => {
  //     db.Users.findByPk(req.params.id).then((usuario) => {
  //       res.render("edit-user", {
  //         userToEdit: usuario,
  //         categorias: categorias,
  //         // usuario,
  //         // categorias,
  //       });
  //     });
  //   });
  // },
  // update: (req, res) => {
  //   // Actualiza datos de usuario
  //   db.Users.findByPk(req.params.id).then((user) => {
  //     user.set({
  //       ...req.body,
  //       password: bcrypt.hashSync(req.body.password, 10),
  //     });
  //     if (req.file) {
  //       user.imagen = req.file.filename;
  //     }
  //     user.save().then(() => {
  //       res.render("/user-list");
  //     });
  //   });
  // },
  // subscribe: (req, res) => {
  //   // Actualiza datos de usuario
  //   db.Users.findByPk(req.params.id).then((user) => {
  //     user.set({
  //       idUsuarioCategorias: 2,
  //     });
  //     user.save().then(() => {
  //       res.redirect("/");
  //     });
  //   });
  // },
  // destroy: (req, res) => {
  //   db.Users.destroy({
  //     where: {
  //       id: req.params.id, 
  //     },
  //   }).then(() => {
  //     res.redirect("/user/list"); 
  //   })
    // db.Users.findByPk(req.params.id).then((user) => {
    //   user.setUserCategories().then(() => {
    //     user.destroy().then(() => {
    //       res.redirect("/user/list");
    //     });
    //   });
    // });
  // },
};
