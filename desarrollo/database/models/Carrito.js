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
    }
  };

      let config = {
        tableName: "carrito",
        timestamps: true,
        createdAt: "created_at",
        updatedAt: "updated_at",
        deletedAt: false,
      };

    const Carrito = sequelize.define(alias, cols, config);
      
    return Carrito;
  }
