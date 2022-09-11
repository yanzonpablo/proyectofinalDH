const db = require("../../database/models");

module.exports = {
    list: (req, res) => {
        db.productsCategories.findAll()
        .then(categorias => {
        return res.status(200).json({
            categorias: categorias.length, 
            data: categorias, 
            status:200 })
        }
    )}
    
}