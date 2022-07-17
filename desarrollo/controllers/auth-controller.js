const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator");
const usersDB = require("../models/db-users");

module.exports = {
    showRegister: (req, res) => {
        res.render("register");
    },
    showLogin: (req, res) => {
        res.render("login");
    },
    login: (req, res) => {
        const resultValidation = validationResult(req);
        if (!resultValidation.isEmpty()) {
            return res.render("login", {
                errors: resultValidation.mapped(),
            });
        }
        else {
            const { email, password } = req.body;
            const user = usersDB.findByEmail(email);
            if (user && (password == user.password)) {
                req.session.loggedUser = user;
    
                res.redirect("/");
                return;
            }
            res.render("login", {
                error: true,
            });
        }
    },
    register: (req, res) => {
        const resultValidation = validationResult(req);
        if (!resultValidation.isEmpty()) {
             res.render("register", {
                errors: resultValidation.mapped(),
            });
            return;
        }
        const newUser = {
            ...req.body,
            id: usersDB.getNewId(),
            // password: bcrypt.hashSync(req.body.password, 10),
        };
        delete newUser.rePassword;
        const users = usersDB.getAll();
        users.push(newUser);
        usersDB.saveAll(users);
        res.redirect("/login");
    },
};
