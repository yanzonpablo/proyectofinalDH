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
        tableName: "usuarios_categorias",
        timesTamp: false
    };

    const Usuario_categoria = sequelize.define(alias, cols, config);

    Usuario_categoria.hasMany(models.Usuario, {
        foreignKey: "idUsuariosCategoria",
        as: "usuariosCategoria"
    })

    return Usuario_categoria;

}
