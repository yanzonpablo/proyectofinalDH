module.exports = function (sequelize, datatypes) {
  const user = sequelize.define(
    "Users",
    {
      nombre: datatypes.STRING,
      apellido: datatypes.STRING,
      email: datatypes.STRING,
      domicilio: datatypes.STRING,
      ciudad: datatypes.STRING,
      password: datatypes.STRING,
      imagen: datatypes.STRING,
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
