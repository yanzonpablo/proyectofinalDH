module.exports = (sequelize, dataTypes) => {
  let alias = "Producto_carritos";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
  };
  let config = {
    tableName: "productos_carrito",
    timesTamp: true,
    createdAt: "createdAt",
  };

  const ProductoCarrito = sequelize.define(alias, cols, config);

  ProductoCarrito.associate = function (models) {
    ProductoCarrito.belongsTo(models.Carritos, {
      foreignKey: "idCarrito",
      as: "idCarritoProd",
    });
  };

  ProductoCarrito.associate = function (models) {
    ProductoCarrito.belongsTo(models.Productos, {
      foreignKey: "idProductos",
      as: "idProdCarrito",
    });
  };

  return ProductoCarrito;
};
