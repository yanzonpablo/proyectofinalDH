const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
// const usersDB = require("../models/db-users");
const db = require("../database/models");

module.exports = {
  showRegister: (req, res) => {
    res.render("register");
  },
  showLogin: (req, res) => {
    res.render("login");
  },
  login: (req, res) => {
    const { email, password } = req.body;
    db.Users.findOne({ where: { email: req.body.email } }).then((user) => {
      if (user && password == user.password) {
        req.session.loggedUser = user;
        if (req.body.recordame == "on") {
          res.cookie("userEmail", req.body.email, { maxAge: 10000 });
        }
        res.render("perfil", { usuario: user });
        return;
      }
      res.render("login", {
        error: true,
      });
    });
  },
  register: (req, res) => {
    const resultValidation = validationResult(req);
    if (!resultValidation.isEmpty()) {
      res.render("register", {
        errors: resultValidation.mapped(),
        oldData: req.body,
      });
      return;
    }
    db.Users.findOne({ where: { email: req.body.email } })
      .then((userExists) => {
        if (userExists) {
          return res.render("register", {
            errors: {
              email: {
                msg: "Ya existe una cuenta vinculada a ese email",
              },
            },
            oldData: req.body,
          });
        }
      })
      .then(() => {
        db.Users.create({
          ...req.body,
        }).then(() => {
          res.redirect("/login");
        });
      });
    /* 
    if (req.file) {
      newUser.imagen = req.file.filename;
    } else {
      newUser.imagen = "user-default.jpg";
    }
    delete newUser.rePassword;
    const users = usersDB.getAll();
    users.push(newUser);
    usersDB.saveAll(users);
    */
  },
  logout: (req, res) => {
    res.clearCookie("userEmail");
    req.session.destroy();
    res.redirect("/");
  },
};
