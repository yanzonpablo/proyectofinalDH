const path = require("path");
const express = require("express");
const db = require("../data/db-products");
const allProducts = db.getAll();

module.exports = {
  create: (req, res) => {
    res.render("cargarProducto");
  },
  details: (req, res) => {
    res.render("product");
  },
  store: (req, res) => {
    res.redirect("/");
  },
  edit: (req, res) => {
    res.render("editarProducto");
  },
  update: (req, res) => {
    res.redirect("req.body");
  },
};
