const db = require("../../database/models");
const bcrypt = require("bcryptjs");

module.exports = {
  list: (req, res) => {
    // Muestra lista de usuarios registrados
    db.Users.findAndCountAll({attributes: ["id","nombre", "apellido", "email"]})
        .then(({rows,count})=>{
            res.status(200).json({
                count: count,
                usuario: rows
            })
        })
  },
  perfil: (req, res) => {
    // Muestra datos usuario registrado
    db.Users
      .findOne({ where: { id: req.params.id }, attributes: ["id","nombre","apellido","email", "domicilio", "ciudad", "imagen"] })
      .then((usuario) => {
        return res.status(200).json({ data: usuario, status: 200 });
    });
  },
};