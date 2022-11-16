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
    await queryInterface.bulkInsert('Pessoas', [
      {
        nome: "Mock Mockson",
        ativo: true,
        email: "mock@mock.com",
        role: 'professor',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        nome: "Mock Mockson Junior",
        ativo: true,
        email: "mockjr@mock.com",
        role: 'estudante',
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
    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
