const path = require("path");
const express = require("express");
const db = require("../data/db");
const productsFilePath = path.join(__dirname, "../data/products.json");
const allProducts = db.getAll();

module.exports = {
  home: (req, res) => {
    res.render("index", {
      productos: allProducts,
    });
  },
  login: (req, res) => {
    res.render("login");
  },
  register: (req, res) => {
    res.render("register");
  },
  product: (req, res) => {
    res.render("product");
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
