module.exports = (req, res, next) => {
    res.locals.isLogged = false;
    next();
}