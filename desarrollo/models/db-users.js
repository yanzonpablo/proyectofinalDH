const fs = require("fs");
const path = require("path");
const db = require("./db");

const usersPath = path.join(__dirname, "../data/users.json");

module.exports = {
  getAll: function () {
    return db.readJsonDB(usersPath);
  },
  saveAll: function (allUsers) {
    db.writeJsonDB(usersPath, allUsers);
  },
  findOne: function (id) {
    return this.getAll().find((p) => p.id == id);
  },
};
