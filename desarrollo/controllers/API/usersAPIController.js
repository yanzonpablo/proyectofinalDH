const db = require("../../database/models");

module.exports = {
  list: (req, res) => {
    // Muestra lista de usuarios registrados
    db.Users.findAndCountAll({
      attributes: ["id", "nombre", "apellido", "email"], raw: true, nest:true
    }).then(({ rows, count }) => {
      const usuarios = rows.map((usuario) => {
        return {...usuario, 
        url: 'http://localhost:3010/api/user/' + usuario.id}
      })
      res.status(200).json({
        count: count,
        users: usuarios,
      });
    });
  },
  perfil: (req, res) => {
    // Muestra datos usuario registrado
    db.Users.findOne({
      where: { id: req.params.id },
      attributes: [
        "id",
        "nombre",
        "apellido",
        "email",
        "domicilio",
        "ciudad",
        "imagen",
      ],
    }).then((usuario) => {
      return res.status(200).json(usuario);
    });
  },
};
