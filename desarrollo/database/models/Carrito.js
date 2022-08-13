module.exports = (sequelize, dataTypes) => {
  let alias = "Carritos";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    totalCantidad: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    totalPrecio: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
  };

  let config = {
    tableName: "carrito",
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
    deletedAt: "deletedAt",
  };

  const Carrito = sequelize.define(alias, cols, config);

  Carrito.associate = function (models) {
    Carrito.hasMany(models.Producto_carritos, {
      foreignKey: "idCarrito",
      as: "idCarritop",
    });
  };

  return Carrito;
};
