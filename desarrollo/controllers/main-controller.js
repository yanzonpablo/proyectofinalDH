const path = require("path");
const express = require("express");
const db = require("../models/db");
const productsFilePath = path.join(__dirname, "../data/products.json"); //Path productos
const categoriesFilePath = path.join(__dirname, "../data/category.json"); //Path categorias
const allProducts = db.readJsonDB(productsFilePath);
const allCategories = db.readJsonDB(categoriesFilePath);


module.exports = {
  home: (req, res) => {
    res.render("index", {
      productos: allProducts,
      categorias: allCategories,
    });
  },
  cart: (req, res) => {
    const busqueda = allProducts.find((art) => {
      return art.id == 14;
    });
    res.render("compras", {
      art: busqueda,
    });
  },
  envio: (req, res) => {
    res.render("detalle-envios");
  },
  pago: (req, res) => {
    res.render("detalle-pagos");
  },
};
