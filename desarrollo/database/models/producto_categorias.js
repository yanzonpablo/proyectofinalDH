module.exports = (sequelize, dataTypes) => {
  let alias = "producto_categorias";
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
    descripcion: {
      type: dataTypes.TEXT("long"),
      allowNull: false,
    },
    imagen: {
      type: dataTypes.STRING,
      allowNull: false,
    },
  };

  let config = {
    tableName: "producto_categorias",
    timesTamp: false,
  };

  const ProductoCategorias = sequelize.define(alias, cols, config);
 
   ProductoCategorias.associate = function (models) {
     ProductoCategorias.hasMany(models.productos, {
       foreignKey: "idProductoCategorias",
       as: "productos",
     });
   };
  return productoCategorias;

};
