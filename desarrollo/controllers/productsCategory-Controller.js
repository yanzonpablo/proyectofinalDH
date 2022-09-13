const db = require("../database/models");
const { validationResult } = require("express-validator");


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
      const resultValidation = validationResult(req);
      if (!resultValidation.isEmpty()) {
          db.ProductsCategories.findByPk(req.params.id).then(categorias=>{
            res.render("edit-category", {
              errors: resultValidation.mapped(),
              oldData: req.body,
              editcategory: categorias
            });
          })
        return;
      }
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
    const resultValidation = validationResult(req);
    if (!resultValidation.isEmpty()) {
          res.render("createCategory", {
            errors: resultValidation.mapped(),
            oldData: req.body,
          });
      return;
    }
      db.ProductsCategories.findAll().then((element)=>{
        if(!element.nombre){
          db.ProductsCategories.create({
            imagen: req.file.filename,
            ...req.body,
          })
        }
        res.redirect("/category/list")
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
