const db = require("../database/models");

module.exports = (req, res, next) => {
  res.locals.isLogged = false;
  if (req.cookies.userEmail) {
    let emailInCookie = req.cookies.userEmail;
    //   let userFromCookie = users.findByEmail(emailInCookie);
    db.Users.findOne({ where: { email: emailInCookie } }).then(
      (userFromCookie) => {
        if (userFromCookie) {
          req.session.loggedUser = userFromCookie;
        }
      }
    );
  }
  if (req.session.loggedUser) {
    res.locals.isLogged = true;
    res.locals.loggedUser = req.session.loggedUser;
  }

  next();
};
