const db = require("../database/models");

module.exports = {
    index: (req, res) => {
        db.Products.findAll()
        .then((productos) => {
            res.render("compras", { art: productos });
        })
    },
    addCart: (req, res) => {
        //buscamos producto
        let producto = req.body.id;
        //chequear si el producto existe
        if(req.session.cart == producto.id) {
            //si existe actualizamos quantity
            req.session.cart = req.session.cart.map((item) => {
                if(item.id == producto.id){
                item.quantity = item.quantity +1
                }
                return item
            })
        } else {
            // agragamos al carrito y seteamos quantity
            req.session.cart.push({...producto, quantity:1})
        }
        return res.redirect("/")
    },
    removeCart: (req, res) => {
        res.send("despues de proximamente")
    }
} 