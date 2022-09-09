const db = require("../database/models");
const { validationResult } = require("express-validator");

module.exports = {
  index: (req, res) => {
    db.Products.findAll({include:["images"]}).then((products) => {
      res.render("products-list", { products });
    });
  },
  details: (req, res) => {
    // RESTA HACER DINAMICO EL product.ejs
    db.Products.findByPk(req.params.id, { include: ["categorie","images"] }).then(
      (products) => {
        db.Products.findAll({
          where: { idProductoCategorias: products.idProductoCategorias },include: ["images"],
        }).then((sameCategorie) => {
          res.render("product", { producto: products, sameCategorie });
        });
      }
    );
  },
  create: (req, res) => {
    db.ProductsCategories.findAll().then((categorie) => {
      res.render("cargarProducto", { categories: categorie });
    });
  },
  edit: (req, res) => {
    db.ProductsCategories.findAll().then((categorie) => {
      db.Products.findByPk(req.params.id, { include: ["categorie","images"] }).then(
        (product) => {
          res.render("editarProducto", {
            productToEdit: product,
            categories: categorie,
          });
        }
      );
    });
  },
  store: (req, res) => {
    const resultValidation = validationResult(req);
    if (!resultValidation.isEmpty()) {
      db.ProductsCategories.findAll().then(categorie=>{
          res.render("cargarProducto", {
            errors: resultValidation.mapped(),
            oldData: req.body,
            categories:categorie
          });
      })
      return;
    }
    if (req.file) {
      db.Products.create({
        ...req.body,
      }).then((product) => {
        db.ProductsImages.create({
          imagen: req.file.filename,
          idProductos: product.id
        }).then(()=>{
          res.redirect("/products");
        })
      });
    }
      else {
        db.Products.create({
          ...req.body,
        })
        res.redirect("/products");
      }
  },
  update: (req, res) => {
    const resultValidation = validationResult(req);
    if (!resultValidation.isEmpty()) {
      db.ProductsCategories.findAll().then(categorie=>{
        db.Products.findByPk(req.params.id,{ include: ["categorie","images"] }).then(product=>{
          res.render("editarProducto", {
            errors: resultValidation.mapped(),
            oldData: req.body,
            productToEdit:product,
            categories:categorie
          });
        })
      })
      return;
    }
    db.Products.findByPk(req.params.id, { include: ["categorie","images"] }).then((product) => {
      product.set({
        ...req.body,
      });
      if (req.file) {
        db.ProductsImages.create({
          idProductos: req.params.id,
          imagen: req.file.filename,
        }).then(()=>{
        })
      }
      product.save().then(() => {
        res.redirect("/products");
      });
    });
  },
  destroy: (req, res) => {
    db.Products.destroy({
      where: {
        id: req.params.id,
      },
    }).then(() => {
      res.redirect("/products");
    });
  },
};
