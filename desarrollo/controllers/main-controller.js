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
  /* TESTING 
  cart: (req, res) => {
    const busqueda = allProducts.find((art) => {
      return art.id == 14;
    });
    res.render("compras", {
      art: busqueda,
    });
  },
  */
  envio: (req, res) => {
    res.render("detalle-envios");
  },
  pago: (req, res) => {
    res.render("detalle-pagos");
  },
};
