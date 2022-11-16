'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Niveis', [
      {
        descricao_nivel: 'basico',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        descricao_nivel: 'intermediario',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        descricao_nivel: 'avançado',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Niveis', null, {});
  }
};
