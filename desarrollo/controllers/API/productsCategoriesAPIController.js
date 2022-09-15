const db = require("../../database/models");

module.exports = {
    list: (req, res) => {
        db.ProductsCategories.findAll({include: ["products"]})
        .then(categorias => {
        return res.status(200).json({
            categorias: categorias.length, 
            data: categorias, 
            status:200 })
        }
    )}
}