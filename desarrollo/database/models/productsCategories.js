module.exports = function (sequelize, datatypes) {
  const productCategorie = sequelize.define(
    "ProductsCategories",
    {
      nombre: datatypes.STRING,
      descripcion: datatypes.STRING,
      imagen: datatypes.STRING,
    },
    {
      tableName: "productos_categorias",
      timestamps: false,
    }
  );

  /*   productCategorie.associate = (models) => {
    productCategorie.hasMany(models.Products, {
      foreignKey: "idProductosCategorias",
      as: "products",
    });
  };
   */
  return productCategorie;
};
