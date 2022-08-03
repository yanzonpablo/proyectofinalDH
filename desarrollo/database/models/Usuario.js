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
      estado: {
        type: dataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: true
      },
      imagen: {
        types: dataTypes.STRING,
        allowNull: false
      },
    };
    let config = {
        tableName: "usuarios",
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at',
        deletedAt: false
    }
    const Usuario = sequelize.define(alias, cols, config);

    return Usuario;

}