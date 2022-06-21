const fs = require("fs");
const path = require("path");

const productsFilePath = path.join(__dirname, "./products.json");

module.exports = {
  getAll: function () {
    return JSON.parse(fs.readFileSync(productsFilePath, "utf-8"));
  },
  saveAll: function (allProducts) {
    const fileTxt = JSON.stringify(allProducts, null, 4);
    fs.writeFileSync(productsFilePath, fileTxt);
  },
  findOne: function (id) {
    return this.getAll().find((p) => p.id == id);
  },
};
