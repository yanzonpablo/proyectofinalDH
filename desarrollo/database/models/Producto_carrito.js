module.exports = (sequelize, dataTypes) => {
  let alias = "producto_carritos";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    idCarrito: {
      type: dataTypes.INTEGER,
    },
    idProductos: {
      type: dataTypes.INTEGER,
    },
  };

  let config = {
    tableName: "producto_carrito",
    timesTamp: true,
    createdAt: "createdAt",
  };

  const ProductoCarrito = sequelize.define(alias, cols, config);

  return ProductoCarrito;

};
