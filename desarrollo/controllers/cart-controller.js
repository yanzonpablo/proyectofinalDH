const db = require("../database/models");

module.exports = {
    index: (req, res) => {
        db.Products.findAll()
        .then((productos) => {
            res.render("compras", { art: productos });
        })
    },
    addCart: (req, res) => {
        res.send("Proximamente");
    },
    removeCart: (req, res) => {
        res.send("despues de proximamente")
    }
} 