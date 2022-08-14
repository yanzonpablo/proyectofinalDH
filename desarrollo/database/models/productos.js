module.exports = (sequelize, dataTypes) => {
  let alias = "productos";
  let cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    seccion: {
      type: dataTypes.STRING,
      allowNull: false,
    },
    descuento: {
      type: dataTypes.INTEGER,
    },
    descripcion: {
      type: dataTypes.TEXT("long"),
    },
    imagen: {
      type: dataTypes.STRING,
    },
    cantidad: {
      type: dataTypes.INTEGER,
      allowNull: false,
    },
    idProductoCategorias: {
      type: dataTypes.INTEGER
    }
  };
  let config = {
    tableName: "productos",
    timestamps: true,
    createdAt: "createdAt",
    updatedAt: "updatedAt",
    deletedAt: "deletedAt",
  };

  const Producto = sequelize.define(alias, cols, config);

  Producto.associate = function (models) {
    Producto.belongsTo(models.producto_categorias, {
      foreignKey: "idProductoCategorias",
      as: "idProductos",
    });
  };


  // Producto.associate = function (models) {
  //   Producto.hasMany(models.Producto_carritos, {
  //     foreignKey: "idProductos",
  //     as: "idProdCarrito",
  //   });
  // };
  return Producto;
};
