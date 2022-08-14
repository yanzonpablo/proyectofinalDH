module.exports = function (sequelize, datatypes) {
  const productCategorie = sequelize.define(
    "ProductsCategories",
    {
      nombre: datatypes.STRING,
      descripcion: datatypes.STRING,
      imagen: datatypes.STRING,
    },
    {
      tableName: "producto_categorias",
      timestamps: false,
    }
  );

  productCategorie.associate = (models) => {
    productCategorie.hasMany(models.Products, {
      foreignKey: "idProductoCategorias",
      as: "products",
    });
  };

  return productCategorie;
};
