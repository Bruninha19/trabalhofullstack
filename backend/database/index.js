const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('cadastro-node', 'postgres', 'Bruna180519', {
    host: 'localhost',
    dialect: 'postgres',
    // Outras opções se necessário
});

module.exports = sequelize;
