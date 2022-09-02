module.exports = function (sequelize, datatypes) {
  const imagenes_producto = sequelize.define(
        "imagenesProductos",
    {
      id: datatypes.INTEGER,
      imagen: datatypes.STRING,
    },
    {
      tableName: "imagenes_productos",
      timestamps: false,

    }
  )
    imagenes_producto.associate = (models) => {
      imagenes_producto.hasMany(models.Products, {
        foreignKey: "idProductos",
        as: "products",
      });
    };
}

return imagenes_producto;