module.exports = function (sequelize, datatypes) {
  const productCart = sequelize.define(
    "ProductsCart",
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
  };

  productCart.associate = (models) => {
    productCart.hasMany(models.Products, {
      foreignKey: "idProductos",
      as: "products",
    });
  };

  return productCart;
};
