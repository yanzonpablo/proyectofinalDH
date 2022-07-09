const path = require("path");
const db = require("./db");

const usersFilePath = path.join(__dirname, "../data/users.json");

module.exports = {
  getAll: function () {
      return db.readJsonDB(usersFilePath);
  },
  saveAll: function (users) {
      db.writeJsonDB(usersFilePath, users);
  },
  getOne: function (id) {
      return this.getAll().find((p) => p.id == id);
  },
  getNewId: function () {
      const users = this.getAll();
      return users.length > 0 ? users[users.length - 1].id + 1 : 1;
  },
  findByEmail: function (email) {
      return this.getAll().find((p) => p.email == email);
  },
};