const db = require("../database/models");

module.exports = {
  list: (req, res) => {
    // Muestra lista de usuarios registrados
    db.ProductsCategories.findAll()
    .then((categories) => {
      res.render("productsCategory", { categories });
    });
  },
  edit: (req, res) => {
    // Vista edicion de categorias
    db.ProductsCategories.findAll()
    .then((categorias) => {
        res.render("edit-category", {
          categorias: categorias,
        });
      });
  },
  update: (req, res) => {
      // Actualiza edicion de categorias
      const resultValidation = validationResult(req);
    db.ProductsCategories.findByPk(req.params.id)
    .then((categorias) => {
      categorias.set(
        ...req.body)
      });

        if (req.file) {
          categorias.imagen = req.file.filename;
        }
      categorias.save()
      .then(() => {
        res.render("productsCategory");
      });
  },

};
