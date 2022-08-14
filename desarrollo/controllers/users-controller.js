const db = require("../database/models");
// const fs = require('fs');
// const path = require("path");
// const pathimagen = path.join(__dirname, "../images/users/");
// const avatar = db.Usuarios(pathimagen);

module.exports = {
  list: (req, res) => {
    db.Usuarios.findAll().then((usuario) => {
      res.render("users-list", { usuario: usuario });
      // fs.readFileSync(avatar); 
    });
  },
  
  details: (req, res) => {
    // Muestra datos usuario registrado
    const id = req.params.id;
    db.Usuarios.findOne(id).then(
      (userProfile) => {
       res.render("perfil", { usuario: userProfile });
      }
    );
  },
  //  edit: (req, res) => {
  //   // Edita datos de usuario
  //   let id = req.params.id;
  //   let userToEdit = allUsers.find((usuario) => usuario.id == id);
  //   res.render("edit-user", {
  //   usuario: userToEdit,
  //   categorias: allCategories,
  //   });
  // },
  // update: (req, res) => {
  //   // Actualiza datos de usuario
  //   const user = allUsers[allUsers.findIndex((u) => u.id == req.params.id)];

  //   user.nombre_apellido = req.body.nombre_apellido;
  //   user.email = req.body.email;
  //   user.password = req.body.password;
  //   user.domicilio = req.body.domicilio;
  //   user.ciudad = req.body.ciudad;
  //   user.categoria = req.body.categoria;

  //   if (req.file) {
  //     const pathAbsolute = path.join(__dirname, "../public", user.imagen);
  //     fs.unlinkSync(pathAbsolute);
  //     user.imagen = req.file.filename;
  //   }
  //   usersFS.saveAll(allUsers);
  //   res.redirect("/details");
  // },
  // destroy: (req, res) => {
  //   // Borra usuario
  // },

}
