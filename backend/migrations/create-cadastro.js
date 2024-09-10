'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('CadastroPessoaFisica', {
      Nome: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      Cpf: {
        type: Sequelize.STRING, // CPF tratado como STRING
        primaryKey: true,
        allowNull: false,
      },
      Telefone: {
        type: Sequelize.STRING, // Telefone tratado como STRING
        allowNull: false,
      },
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('CadastroPessoaFisica');
  }
};
