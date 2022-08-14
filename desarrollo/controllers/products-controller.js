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
        res.render("product", { producto: products });
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
      db.Products.findByPk(req.params.id).then((product) => {
        res.render("editarProducto", {
          productToEdit: product,
          categories: categorie,
        });
      });
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
    db.Products.update(
      {
        ...req.body,
      },
      {
        where: { id: req.params.id },
      }
    ).then(() => {
      res.redirect("/products");
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
