module.exports = (sequelize, dataTypes) => {
  let alias = "Producto_categorias";
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
    descripcion: {
      type: dataTypes.TEXT("long"),
      allowNull: false,
    },
    imagen: {
      types: dataTypes.STRING,
      allowNull: false,
    },
  };

  let config = {
    tableName: "productos_categorias",
    timesTamp: false,
  };

  const Producto_categoria = sequelize.define(alias, cols, config);
 
   Producto_categoria.associate = function (models) {
     Producto_categoria.hasMany(models.Productos, {
       foreignKey: "idProductosCategorias",
       as: "productosCategoria",
     });
   };
  return Producto_categoria;

};
