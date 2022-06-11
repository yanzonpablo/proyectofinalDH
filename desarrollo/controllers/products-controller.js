const path = require("path");
const express = require("express");
const productos = require("../productos");
const { search } = require("../routes/main-routes");

module.exports = {
  create: (req, res) => {
    res.render("cargarProducto");
  },
  details: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/product.html"));
  },
  // RESTA HACER DINAMICO EL PRODUCT.HTML
  store: (req, res) => {
    res.redirect("/");
  },
  edit: (req, res) => {
    res.render("editarProducto");
  },
  update: (req, res) => {
    res.redirect("/");
  },
  // delete: (req, res) => {
  //   const busqueda = productos.find((search) => {
  //     return search.id == req.params.id;
  //   });
  // },
  // if(busqueda) {
  //   res.render("/:id/delete", { productos: productos });
  // },
};
