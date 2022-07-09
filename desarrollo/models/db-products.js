const path = require("path");
const db = require("./db");

const productsFilePath = path.join(__dirname, "../data/products.json");

module.exports = {
  getAll: function () {
    return db.readJsonDB(productsFilePath);
  },
  saveAll: function (allProducts) {
    db.writeJsonDB(productsFilePath, allProducts);
  },
  findOne: function (id) {
    return this.getAll().find((p) => p.id == id);
  },
};
