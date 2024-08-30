'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Registrations', [
      {
        studentId: 1,
        courseId: 1,
        status: 'studing',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        studentId: 3,
        courseId: 2,
        status: 'studing',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        studentId: 5,
        courseId: 3,
        status: 'studing',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        studentId: 7,
        courseId: 4,
        status: 'studing',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        studentId: 9,
        courseId: 5,
        status: 'studing',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Registrations', null, {});
  }
};
