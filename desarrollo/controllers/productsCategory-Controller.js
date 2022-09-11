const db = require("../database/models");

module.exports = {
  list: (req, res) => {
    // Lista las categorias
    db.ProductsCategories.findAll()
    .then((categories) => {
      res.render("category-list", { categories });
    });
  },
  edit: (req, res) => {
    // Vista edicion de categorias
      db.ProductsCategories.findByPk(req.params.id)
      .then((categorie) => {
        res.render("edit-category", {
          editcategory : categorie,
        });
      });
  },

  update: (req, res) => {
      // Actualiza edicion de categorias
      db.ProductsCategories.findByPk(req.params.id)
      .then((categorias) => {
      categorias.set(
        {...req.body})
      categorias.save()
        .then(() => {
          res.redirect("/category/list");
        });
      });
  },
  create: (req, res) => {
      res.render("createCategory");
  },
  store: (req, res) => {
    db.ProductsCategories.findAll()
    .then((element) => {
      if(!element.nombre) {
        db.ProductsCategories.create({...req.body})
        res.redirect("/category/list");
      } 
      // else {
      //   res.render('createCategory', {duplicate})
      // }
    })
  },
  destroy: (req, res) => {
    db.ProductsCategories.destroy({
      where: {
        id: req.params.id
        }
      })
      .then(() => {
      res.redirect("/category/list")
    })
  }
};
