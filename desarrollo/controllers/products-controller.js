const db = require("../database/models");

module.exports = {
  index: (req, res) => {
    db.Products.findAll().then((products) => {
      res.render("products-list", { products });
    });
  },
  details: (req, res) => {
    // RESTA HACER DINAMICO EL product.ejs
    db.Products.findByPk(req.params.id, { include: ["categorie"] }).then(
      (products) => {
        db.Products.findAll({
          where: { idProductoCategorias: products.idProductoCategorias },
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
    db.Products.create({
      ...req.body,
    }).then(() => {
      res.redirect("/products");
    });
  },
  update: (req, res) => {
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
