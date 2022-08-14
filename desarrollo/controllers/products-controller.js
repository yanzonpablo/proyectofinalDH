const db = require("../database/models");
const products = require("../database/models/products");

module.exports = {
  index: (req, res) => {
    db.Products.findAll({ include: ["categorie"] }).then((products) => {
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
    res.render("cargarProducto", {});
  },
  edit: (req, res) => {
    db.Products.findByPk(req.params.id).then((product) => {
      res.render("editarProducto", { productToEdit: product });
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
