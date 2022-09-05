const db = require("../database/models");


module.exports = {
  home: (req, res) => {
    db.ProductsCategories.findAll().then((categorias) => {
      db.Products.findAll({include:["images"]}).then((productos) => {
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
    const cart = [];
    const user = req.session.userLogged;
         if(user) {
          db.carrito.findOne({
              where: {
                  id_Usuario: user.id,
              },
              include: [
                  {association: 'productos'}
              ]
              
          })
        }
      },  

  datosEnvio: (req, res) => {
    db.user.finOne({ where: { id: req.session.userLogged } 
    .then((datos) => {
      res.render("detalle-envio", { datos: datos })
    })
  })
},


  envio: (req, res) => {
    res.render("detalle-envios");
  },

  pago: (req, res) => {
    res.render("detalle-pagos");
  },
  
  }
    
