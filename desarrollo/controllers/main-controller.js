const db = require("../database/models");

module.exports = {
  home: (req, res) => {
    db.ProductsCategories.findAll().then((categorias) => {
      db.Products.findAll().then((productos) => {
        res.render("index", {
          productos,
          categorias,
        });
      });
    });
  },

  cart: (req, res) => {
    db.Products.findByPk(req.params.id).then((art) => {
      res.render("compras", { art });
    });
  },

  addProductToCart: (req, res) => {
    let product = {
      ...req.body
    };
    const cart = [];
    cart.push(product);
    res.redirect("/products");
  },



  envio: (req, res) => {
    res.render("detalle-envios");
  },
  pago: (req, res) => {
    res.render("detalle-pagos");
  },
};
