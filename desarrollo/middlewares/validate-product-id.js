const db = require("../models/db-products");

module.exports = (req, res, next) => {
  const product = db.findOne(req.params.id);

  if (product) {
    next();
  } else {
    res.render("product-not-found");
  }
};
