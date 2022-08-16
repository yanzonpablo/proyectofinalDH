module.exports = function (sequelize, datatypes) {
  const userCategorie = sequelize.define(
    "UserCategories",
    {
      nombre: datatypes.STRING,
      acceso: datatypes.INTEGER,
    },
    {
      tableName: "usuario_categorias",
      timestamps: false,
    }
  );
  userCategorie.associate = (models) => {
    userCategorie.hasMany(models.Users, {
      foreignKey: "idUsuarioCategorias",
      as: "users",
    });
  };
  return userCategorie;
};
