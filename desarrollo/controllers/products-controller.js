const path = require("path");
const fs = require("fs");
const express = require("express");
const db = require("../models/db");
const productsFS = require("../models/db-products");
const productsFilePath = path.join(__dirname, "../data/products.json"); //Path productos
const categoriesFilePath = path.join(__dirname, "../data/category.json"); //Path categorias
const allProducts = db.readJsonDB(productsFilePath);
const allCategories = db.readJsonDB(categoriesFilePath);

module.exports = {
  index: (req, res) => {
    res.render("products-list", {
      productos: allProducts,
    });
  },
  details: (req, res) => {
    // RESTA HACER DINAMICO EL product.ejs
    res.render("product", {
      producto: productsFS.findOne(req.params.id),
    });
  },
  create: (req, res) => {
    res.render("cargarProducto", { categories: allCategories });
  },
  // ES EL ORIGINAL
  // store: (req, res) => {
  //   const newProduct = req.body;
  //   // Crear id en base al ultimo
  //   if (allProducts.length) {
  //     newProduct.id = allProducts[allProducts.length - 1].id + 1;
  //   } else {
  //     newProduct.id = 1;
  //   }
  //   allProducts.push(newProduct);
  //   productsFS.saveAll(allProducts);
  //   res.redirect("/products");
  // },

  // version multer, ya funciona, carga todos los datos en json, no se visualiza imagen en products
  store: (req, res) => {
    const newProduct = req.body;
    // Crear id en base al ultimo
    if (req.file) {
      newProduct.imagen = req.file.filename;
      if (allProducts.length) {
        newProduct.id = allProducts[allProducts.length - 1].id + 1;
      } else {
        newProduct.id = 1;
      }
      allProducts.push(newProduct);
      productsFS.saveAll(allProducts);
      res.redirect("/products");
    } else {
          res.render("cargarProducto", { categories: allCategories });
    };
  },
  edit: (req, res) => {
    let id = req.params.id;
    let productToEdit = allProducts.find((product) => product.id == id);
    res.render("editarProducto", {
      productToEdit: productToEdit,
      categories: allCategories,
    });
  },
  update: (req, res) => {
    const product =
      allProducts[allProducts.findIndex((p) => p.id == req.params.id)];

    if (req.file) {
      const pathAbsolute = path.join(__dirname, "../public", product.imagen);
      fs.unlinkSync(pathAbsolute);
      product.imagen = req.file.filename;
    }
    product.nombre = req.body.nombre;
    product.precio = req.body.precio;
    product.descripcion = req.body.descripcion;
    product.categoria = req.body.categoria;
    product.seccion = req.body.seccion;
    product.descuento = req.body.descuento;
    productsFS.saveAll(allProducts);
    res.redirect("/products");
  },
  destroy: (req, res) => {
    const filteredProducts = allProducts.filter((p) => {
      return p.id != req.params.id;
    });
    productsFS.saveAll(filteredProducts);
    res.redirect("/products");
  },
};
