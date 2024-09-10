const { Sequelize } = require('sequelize'); // Importa apenas Sequelize, não a instância
const sequelize = new Sequelize('cadastro-node', 'postgres', 'Bruna180519', {
  host: 'localhost',
  dialect: 'postgres',
  // outras opções, se necessário
});

const db = {};

db.Sequelize = Sequelize; // Isso pode ser removido se não for necessário para outros usos
db.sequelize = sequelize;

// Carregar modelos
db.cpf = require('./cpf')(sequelize, Sequelize.DataTypes);

module.exports = db;
