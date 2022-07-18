const users = require('../models/db-users');

module.exports = (req, res, next) => {
    res.locals.isLogged = false;

    let emailInCookie = req.cookies.userEmail;
    let userFromCookie = users.findByEmail(emailInCookie);

    if (userFromCookie) {
        req.session.loggedUser = userFromCookie;
    }

    if (req.session.loggedUser) {
        res.locals.isLogged = true
        res.locals.loggedUser = req.session.loggedUser
    }


    next();
}