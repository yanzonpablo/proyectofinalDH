const db = require("../../database/models");

module.exports = {
    list: (req, res) => {
        const limit = 10;
        const offset = req.query.page && req.query.page > 0 ? req.query.page : 0;
        db.Products.findAndCountAll({limit:limit, offset: offset*limit,include:["categorie"],attributes: ["id","nombre","descripcion","precio","seccion","descuento"],raw: true, nest:true})
        .then(({rows,count})=>{
            const products = rows.map((product)=>{
                return {detail: 'http://localhost:3010/api/products/' + product.id,...product}
            })
            res.status(200).json({
                next: req.originalUrl,
                previous: req.originalUrl,
                count: count,
                products: products,
                //FALTA:CAMBIAR ? PAGE CON NEXT Y PREVIOUS
            })
        }).catch(error =>{
            console.error(error)
            res.status(500).json({
                meta:{
                    status: 500,
                    url: req.originalUrl,
                    errorName: error.name,
                    errorMsg: error.msg,
                }
            })
        })
    },
    detail: (req, res) => {
        db.Products.findOne({where: { id: req.params.id },raw:true,nest:true,include: ["categorie","images"]})
            .then((product) => {res.status(200).json({imagen: 'http://localhost:3010/images/products/' + product.images.imagen,...product, })})
    }
}