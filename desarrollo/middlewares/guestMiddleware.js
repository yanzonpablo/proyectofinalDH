module.exports = (req, res, next) => {
    if (req.session.loggedUser) {
        res.redirect('/');
        res.redirect('/user/:id/');
    }
    next();
};