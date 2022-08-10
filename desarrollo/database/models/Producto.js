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
        types: dataTypes.INTEGER,
      },
      descripcion: {
        type: dataTypes.TEXT("long"),
        allowNull: false,
      },
      imagen: {
        types: dataTypes.STRING,
      },
      cantidad: {
        types: dataTypes.INTEGER,
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

    return Producto;
}



