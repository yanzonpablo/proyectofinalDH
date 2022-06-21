const path = require("path");
const fs = require("fs");
const express = require("express");
const products = require("../data/db-products");
const productsFilePath = path.join(__dirname, "../data/products.json");
const allProducts = products.getAll();

module.exports = {
  create: (req, res) => {
    res.render("cargarProducto");
  },
  details: (req, res) => {
    // RESTA HACER DINAMICO EL PRODUCT.HTML
    res.render("product");
    // Comentario para renderizar producto en base a su ID
    /* res.render("product", {
      product: allProducts.find(p) => p.id == req.params.id
    })*/
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
    const fileTxt = JSON.stringify(allProducts, null, 4);
    fs.writeFileSync(productsFilePath, fileTxt);
    res.redirect("/");
  },
  edit: (req, res) => {
    res.render("editarProducto");
  },
  update: (req, res) => {
    res.redirect("req.body");
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
