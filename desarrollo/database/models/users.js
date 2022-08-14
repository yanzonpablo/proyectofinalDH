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
  /*   
  user.associate = (models) => {
    user.hasMany(models.Carts, {
      foreignKey: "idUsuario",
      as: "carts",
    });
    user.belongsTo(models.UsersCategories, {
      foreignKey: "idUsuarioCategorias",
      as: "categorie",
    });
  }; 
  */
  return user;
};
