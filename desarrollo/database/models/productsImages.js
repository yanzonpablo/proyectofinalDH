module.exports = function (sequelize, datatypes) {
  const productImages = sequelize.define(
        "ProductsImages",
    {
      imagen: datatypes.STRING,
    },
    {
      tableName: "imagenes_productos",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      deletedAt: "deletedAt",
    }
  )
  productImages.associate = (models) => {
    productImages.belongsTo(models.Products, {
        foreignKey: "idProductos",
        as: "product",
      });
    };
return productImages;
}