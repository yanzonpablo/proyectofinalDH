const db = require("../database/models");

module.exports = {
  list: (req, res) => {
    // Lista las categorias
    db.ProductsCategories.findAll()
    .then((categories) => {
      res.render("productsCategory", { categories });
    });
  },
  edit: (req, res) => {
    // Vista edicion de categorias
    db.ProductsCategories.findAll()
    .then((categorias) => {
      db.ProductsCategories.findByPk(req.params.id)
      .then((categories) => {
        res.render("edit-category", {
          editcategory : categories,
          categorias: categorias,
          })
        });
      });
  },

  update: (req, res) => {
      // Actualiza edicion de categorias
    db.ProductsCategories.findByPk(req.params.id)
    .then((categorias) => {
      categorias.set(
        {...req.body})
      });

        if (req.file) {
          categorias.imagen = req.file.filename;
        }

      categorias.save()
      .then(() => {
        res.render("productsCategory", categorias);
      });
  },

};
