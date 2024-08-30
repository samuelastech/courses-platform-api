'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Courses', [
      {
        title: 'Orientação a Objetos com Java',
        description: 'Curso de Java: aprendendo os fundamentos do paradigma',
        startDate: '2024-01-01',
        categoryId: 1,
        teacherId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'O canivete suíço JavaScript',
        description: 'Curso de Node.js: aprendendo a usar JS fora do navegador',
        startDate: '2024-01-01',
        categoryId: 2,
        teacherId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Renderizações com React DOM',
        description: 'Curso de React DOM: otimizando a performance com useRef',
        startDate: '2024-01-01',
        categoryId: 3,
        teacherId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Seu primeiro app',
        description: 'Curso de React Native: criando um app multiplataforma',
        startDate: '2024-01-01',
        categoryId: 4,
        teacherId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Criando aplicações para o Bill Gates',
        description: 'Curso de C#: conhecendo a linguagem do Windows',
        startDate: '2024-01-01',
        categoryId: 5,
        teacherId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Courses', null, {});
  }
};
