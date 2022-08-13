module.exports = (sequelize, dataTypes) => {
    let alias = "Productos";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
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
        allowNull: false,
      },
      imagen: {
        type: dataTypes.STRING,
      },
      cantidad: {
        type: dataTypes.INTEGER,
        allowNull: false,
      }
    };
    let config = {
      tableName: "productos",
      timestamps: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
      deletedAt: false,
    };

    const Producto = sequelize.define(alias, cols, config);
    
    Producto.associate = function (models) {
        Productos.belongsTo(models.Producto_Categorias, {
          foreignKey: "idProductosCategoria",
          as: "productoCategorias",
        });
      }
      
    Producto.associate = function (models) {
      Producto.belongsTo(models.Ofertas, {
        foreignKey: "idProductos",
        as: "ofertas",
      });
    };

    Producto.associate = function (models) {
      Producto.hasMany(models.Producto_carritos, {
        foreignKey: "idProductos",
        as: "idProdCarrito",
      });
    };
    return Producto;
}



