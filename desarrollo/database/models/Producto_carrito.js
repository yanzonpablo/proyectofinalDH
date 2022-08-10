module.exports = (sequelize, dataTypes) => {
  let alias = "Producto_carritos";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
        }
    };
    let config = {
    tableName: "productos_carrito",
    timesTamp: true,
    createdAt: "created_at"
    };

    const ProductoCarrito = sequelize.define(alias, cols, config);

    return ProductoCarrito;
}