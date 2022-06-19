const fs = require("fs");
const path = require("path");

const usersPath = path.join(__dirname, "./users.json");

module.exports = {
  getAll: function () {
    return JSON.parse(fs.readFileSync(usersPath, "utf-8"));
  },
};
