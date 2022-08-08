module.exports = (sequelize, dataTypes) => {
    let alias = "Usuarios";
    let cols = {
      id: {
        type: dataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      nombre: {
        type: dataTypes.STRING,
        allowNull: false
      },
      apellido: {
        type: dataTypes.STRING,
        allowNull: false
      },
      email: {
        type: dataTypes.STRING,
        unique: true,
        allowNull: false
      },
      password: {
        type: dataTypes.STRING,
        allowNull: false
      },
      domicilio: {
        type: dataTypes.STRING,
        allowNull: false
      },
      ciudad: {
        type: dataTypes.STRING,
        allowNull: false
      },
      imagen: {
        types: dataTypes.STRING,
      },
    };

    let config = {
        tableName: "usuarios",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    };

    const Usuario = sequelize.define(alias, cols, config);

        Usuario.associate = function(models) {
          Usuario.belongsTo(models.Usuarios_categorias, {
            as: "usuarios_categorias",
            foreignKey: "idCategoria"
          })
        }
    return Usuario;

}