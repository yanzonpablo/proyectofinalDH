const db = require("../../database/models");

module.exports = {
    list: (req, res) => {
        const limit = 10;
        const offset = req.query.page && req.query.page > 0 ? req.query.page : 0;
        db.Products.findAndCountAll({limit:limit, offset: offset*limit,include:["categorie"],attributes: ["id","nombre","descripcion","precio"]})
        .then(({rows,count})=>{
            res.status(200).json({
                next: req.originalUrl,
                previous: req.originalUrl,
                count: count,
                products: rows
                //FALTA:CAMBIAR ? PAGE CON NEXT Y PREVIOUS
                //      CountByCategorie y Detail con URL 
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
}