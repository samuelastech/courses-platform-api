'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Categories', [
      {
        title: 'Java',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Node.js',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'React DOM',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'React Native',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'C#',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Categories', null, {});
  }
};
