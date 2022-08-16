module.exports = function (sequelize, datatypes) {
  const user = sequelize.define(
    "Users",
    {
      nombre: datatypes.INTEGER,
      apellido: datatypes.INTEGER,
      email: datatypes.INTEGER,
      domicilio: datatypes.INTEGER,
      ciudad: datatypes.INTEGER,
      password: datatypes.INTEGER,
      imagen: datatypes.INTEGER,
    },
    {
      tableName: "usuarios",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      deletedAt: "deletedAt",
    }
  );
  user.associate = (models) => {
    user.belongsTo(models.UserCategories, {
      foreignKey: "idUsuarioCategorias",
      as: "categorie",
    });
    /*   
    user.hasMany(models.Carts, {
      foreignKey: "idUsuario",
      as: "carts",
    });
    */
  };
  return user;
};
