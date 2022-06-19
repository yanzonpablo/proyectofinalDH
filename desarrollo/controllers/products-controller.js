const path = require("path");
const express = require("express");
// const productos = require("../productos");
const db = require("../data/db");
const allProducts = db.getAll();

module.exports = {
  create: (req, res) => {
    res.render("cargarProducto");
  },
  details: (req, res) => {
    res.render("product");
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
