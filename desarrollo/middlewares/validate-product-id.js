const db = require("../database/models");

module.exports = (req, res, next) => {
  db.Products.findOne({ where: { id: req.params.id } }).then((product) => {
    if (product) {
      next();
    } else {
      res.render("product-not-found");
    }
  });
};
