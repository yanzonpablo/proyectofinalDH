const fs = require ("fs");
const path = require("path");

const productsPath = path.join(__dirname, "./products.json");

module.exports = {
    getAll: function () {
        return JSON.parse(fs.readFileSync(productsPath, "utf-8"));
    },
};