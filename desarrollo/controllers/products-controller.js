const path = require("path");
const fs = require("fs");
const express = require("express");
const db = require("../data/db");
// const productsFilePath = path.join(__dirname, "../data/products.json");
const allProducts = db.getAll();

module.exports = {
  index: (req, res) => {
    res.render("products-list", {
      productos: allProducts,
    });
  },
  details: (req, res) => {
    // RESTA HACER DINAMICO EL product.ejs
    res.render("product", {
      producto: db.findOne(req.params.id),
    });
  },
  create: (req, res) => {
    res.render("cargarProducto");
  },
  store: (req, res) => {
    const newProduct = req.body;
    // Crear id en base al ultimo
    if (allProducts.length) {
      newProduct.id = allProducts[allProducts.length - 1].id + 1;
    } else {
      newProduct.id = 1;
    }
    allProducts.push(newProduct);
    db.saveAll(allProducts);
    res.redirect("/products");
  },
  edit: (req, res) => {
    let id = req.params.id;
    let productToEdit = allProducts.find((product) => product.id == id);
    res.render("editarProducto", { productToEdit: productToEdit });
  },
  update: (req, res) => {
    const productIndex = allProducts.findIndex((p) => p.id == req.params.id);
    const product = allProducts[productIndex];
    const image = req.file ? req.file.filename : product.imagen;
    product.nombre = req.body.nombre;
    product.precio = req.body.precio;
    product.descripcion = req.body.descripcion;
    product.categoria = req.body.categoria;
    product.seccion = req.body.seccion;
    product.descuento = req.body.descuento;
    db.saveAll(allProducts);
    res.redirect("/products");
  },
};
