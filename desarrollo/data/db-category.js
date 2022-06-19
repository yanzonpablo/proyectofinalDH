const fs = require("fs");
const path = require("path");

const categoryPath = path.join(__dirname, "./category.json");

module.exports = {
  getAll: function () {
    return JSON.parse(fs.readFileSync(categoryPath, "utf-8"));
  },
};
