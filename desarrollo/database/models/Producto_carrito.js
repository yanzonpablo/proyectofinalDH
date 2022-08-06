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
    timesTamp: false,
    };

    const Producto_carrito = sequelize.define(alias, cols, config);

    return Producto_carrito;
}