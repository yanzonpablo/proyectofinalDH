const path = require("path");
const express = require("express");
const productos = require("../productos");

module.exports = {
  home: (req, res) => {
    res.render("index", {
      productos: productos,
    });
  },
  login: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/login.html"));
  },
  register: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/register.html"));
  },
  product: (req, res) => {
    res.sendFile(path.join(__dirname, "../views/producto.html"));
  },
  cart: (req, res) => {
      const busqueda = productos.find((art) => {
        return art.id == 14
      })
        res.render("compras", {
          art: busqueda
        }
      )}
    }

