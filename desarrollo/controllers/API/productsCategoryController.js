const db = require("../../database/models");

module.exports = {

    list: (req, res) => {
        db.category.findAll()
        return res.send('hola')
    }
}