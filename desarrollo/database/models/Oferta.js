module.exports = (sequelize, dataTypes) => {
    let alias = "ofertas";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      descripcion: {
        type: dataTypes.TEXT("long"),
        allowNull: false,
      },
      fecha_inicio: {
        type: dataTypes.DATE,
      },
      fecha_fin: {
        type: dataTypes.DATE,
      },
      tipo_oferta: {
        type: dataTypes.STRING,
      },
    };

    let config = {
        tableName: "ofertas",
        timesTamp: false,
    };
  }
