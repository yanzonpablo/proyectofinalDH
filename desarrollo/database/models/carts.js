module.exports = function (sequelize, datatypes) {
  const cart = sequelize.define(
    "Carts",
    {
      totalCantidad: datatypes.INTEGER,
      totalPrecio: datatypes.INTEGER,
    },
    {
      tableName: "carrito",
      timestamps: true,
      createdAt: "createdAt",
      updatedAt: "updatedAt",
      deletedAt: "deletedAt",
    }
  );

  cart.associate = (models) => {
    cart.belongsTo(models.Users, {
      foreignKey: "idUsuario",
      as: "user",
    });
    /* Falta relacion con tabla de carrito_compras */
  };
  return cart;
};
