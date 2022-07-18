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
        const { email, password } = req.body;
        const user = usersDB.findByEmail(email);
            if (user && (password == user.password)) {
            delete user.password; // Se borra la password por seguridad
            req.session.loggedUser = user;

            if (req.body.recordame == 'on') {
                res.cookie('userEmail', req.body.email, { maxAge: 10000})
            }
    
            res.redirect("/");
            return;
            }
            res.render("login", {
                error: true,
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
        const userExists = usersDB.findByEmail(req.body.email)
        if (userExists) {
            return res.render("register", {
                errors: {
                    email: {
                        msg: 'Ya existe una cuenta vinculada a ese email'
                    }
                },
                oldData: req.body,
            })
        }
        const newUser = {
            ...req.body,
            id: usersDB.getNewId(),
            password: bcrypt.hashSync(req.body.password, 10),
            if (imagen) {
                imagen: req.file.filename
            }
        };
        delete newUser.rePassword;
        const users = usersDB.getAll();
        users.push(newUser);
        usersDB.saveAll(users);
        res.redirect("/login");
    },
    logout: (req, res) => {
        res.clearCookie('userEmail');
        req.session.destroy();
        res.redirect('/');
    }
};
