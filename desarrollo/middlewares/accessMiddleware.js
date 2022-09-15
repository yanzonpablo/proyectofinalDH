module.exports = (req, res, next) => {
    if(!(req.session.loggedUser && req.session.loggedUser.idUsuarioCategorias == 3)) {
        res.redirect('/');
    }
    next();
};