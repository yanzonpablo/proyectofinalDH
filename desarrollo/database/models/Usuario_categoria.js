module.exports = (sequelize, dataTypes) => {
    let alias = "Usuario_categorias";
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
        acceso: {
            type: dataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: true 
        }
    };

    let config = {
        tableName: "usuario_categorias",
        timesTamp: false
    };

    const Usuario_categorias = sequelize.define(alias, cols, config);

    Usuario_categorias.associate = function (models) {
        Usuario_categorias.hasMany(models.Usuarios, {
          foreignKey: "idUsuarioCategorias",
          as: "categoriaUsuarios",
        });
    }
    return Usuario_categorias;

}
