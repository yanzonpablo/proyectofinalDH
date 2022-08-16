module.exports = function (sequelize, datatypes) {
  const productCart = sequelize.define(
    "ProductsCarts",
    {},
    {
      tableName: "producto_carrito",
      timestamps: true,
      createdAt: "createdAt",
    }
  );

  productCart.associate = (models) => {
    productCart.belongsTo(models.Carts, {
      foreignKey: "idCarrito",
      as: "cart",
    });
    /* 
    productCart.hasMany(models.Products, {
      foreignKey: "idProductos",
      as: "productsCart",
    });
     */
  };

  return productCart;
};
