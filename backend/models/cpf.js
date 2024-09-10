const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class CadastroPessoaFisica extends Model{}

    CadastroPessoaFisica.init({ 
        Nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    Cpf: {
        type: DataTypes.STRING, 
        primaryKey: true,
        allowNull: false
    },
    Telefone: {
     type: DataTypes.STRING,
     allowNull: false
    }
    }, 
    { 
        sequelize,
        tableName: 'CadastroPessoaFisica',
        timestamps: false 
    });
    return CadastroPessoaFisica;
};

