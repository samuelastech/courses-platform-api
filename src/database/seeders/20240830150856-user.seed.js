'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        "name": "André Nogueira",
        "email": "caldeirapedro-henrique@santos.br",
        "cpf": "587.126.903-68",
        "isActive": true,
        "role": "student",
        "createdAt": "2024-01-25T12:46:57",
        "updatedAt": "2024-08-08T04:14:42"
      },
      {
        "name": "Mirella Alves",
        "email": "barrosisabella@da.com",
        "cpf": "379.504.218-60",
        "isActive": false,
        "role": "teacher",
        "createdAt": "2024-08-22T06:55:03",
        "updatedAt": "2024-08-14T17:25:35"
      },
      {
        "name": "Ana Lívia Vieira",
        "email": "gda-costa@hotmail.com",
        "cpf": "237.519.406-34",
        "isActive": true,
        "role": "student",
        "createdAt": "2024-05-17T12:33:00",
        "updatedAt": "2024-06-01T12:49:08"
      },
      {
        "name": "Ana Sophia Ferreira",
        "email": "vieiradavi-lucca@hotmail.com",
        "cpf": "932.750.684-74",
        "isActive": false,
        "role": "teacher",
        "createdAt": "2024-06-14T06:59:57",
        "updatedAt": "2024-04-07T08:55:41"
      },
      {
        "name": "Lucas Gabriel Azevedo",
        "email": "julia62@costa.br",
        "cpf": "218.349.657-64",
        "isActive": true,
        "role": "student",
        "createdAt": "2024-03-28T04:12:49",
        "updatedAt": "2024-06-05T04:20:16"
      },
      {
        "name": "Eduarda Lopes",
        "email": "jfogaca@melo.com",
        "cpf": "691.872.453-37",
        "isActive": false,
        "role": "student",
        "createdAt": "2024-07-15T04:47:21",
        "updatedAt": "2024-08-24T06:37:33"
      },
      {
        "name": "Enrico Duarte",
        "email": "danilocaldeira@ig.com.br",
        "cpf": "524.931.768-55",
        "isActive": false,
        "role": "student",
        "createdAt": "2024-05-20T01:59:25",
        "updatedAt": "2024-07-04T18:27:12"
      },
      {
        "name": "Maria Luiza Lima",
        "email": "da-cunhamilena@ig.com.br",
        "cpf": "895.201.764-11",
        "isActive": true,
        "role": "teacher",
        "createdAt": "2024-08-17T11:19:37",
        "updatedAt": "2024-01-20T16:52:23"
      },
      {
        "name": "Emanuel Jesus",
        "email": "da-conceicaohenrique@uol.com.br",
        "cpf": "904.326.781-31",
        "isActive": true,
        "role": "student",
        "createdAt": "2024-03-16T10:45:06",
        "updatedAt": "2024-01-06T21:03:40"
      },
      {
        "name": "Eduarda Cardoso",
        "email": "catarina03@uol.com.br",
        "cpf": "769.405.321-61",
        "isActive": true,
        "role": "teacher",
        "createdAt": "2024-01-27T02:34:15",
        "updatedAt": "2024-02-02T04:54:35"
      },
      {
        "name": "Danilo Silva",
        "email": "carolineda-cruz@pinto.br",
        "cpf": "357.062.948-10",
        "isActive": true,
        "role": "student",
        "createdAt": "2024-03-14T07:41:15",
        "updatedAt": "2024-01-08T20:18:52"
      },
      {
        "name": "Enzo Pereira",
        "email": "isaac28@vieira.com",
        "cpf": "251.430.786-44",
        "isActive": true,
        "role": "student",
        "createdAt": "2024-06-08T01:25:05",
        "updatedAt": "2024-04-29T18:52:49"
      },
      {
        "name": "Carlos Eduardo da Conceição",
        "email": "barrosfernanda@hotmail.com",
        "cpf": "298.134.765-91",
        "isActive": false,
        "role": "student",
        "createdAt": "2024-01-11T18:45:09",
        "updatedAt": "2024-06-07T00:24:43"
      },
      {
        "name": "Vitor Gabriel Rocha",
        "email": "ribeirolaura@cardoso.com",
        "cpf": "057.938.241-97",
        "isActive": false,
        "role": "teacher",
        "createdAt": "2024-01-29T13:47:07",
        "updatedAt": "2024-04-11T19:43:46"
      },
      {
        "name": "Emanuella Mendes",
        "email": "franciscoduarte@ig.com.br",
        "cpf": "637.890.142-22",
        "isActive": true,
        "role": "student",
        "createdAt": "2024-03-08T11:59:19",
        "updatedAt": "2024-01-13T03:29:48"
      },
      {
        "name": "Dra. Lara da Conceição",
        "email": "joao-pedro10@silva.br",
        "cpf": "410.529.736-80",
        "isActive": false,
        "role": "teacher",
        "createdAt": "2024-05-30T16:28:20",
        "updatedAt": "2024-06-08T00:05:36"
      },
      {
        "name": "Julia Araújo",
        "email": "cmoreira@da.com",
        "cpf": "947.830.251-50",
        "isActive": true,
        "role": "student",
        "createdAt": "2024-04-28T04:52:01",
        "updatedAt": "2024-05-08T08:07:30"
      },
      {
        "name": "Maria Cecília Costela",
        "email": "yasmin50@da.com",
        "cpf": "485.673.210-26",
        "isActive": true,
        "role": "student",
        "createdAt": "2024-02-12T09:49:42",
        "updatedAt": "2024-02-19T07:15:35"
      },
      {
        "name": "Igor Ribeiro",
        "email": "camposvitoria@goncalves.net",
        "cpf": "478.910.253-04",
        "isActive": false,
        "role": "teacher",
        "createdAt": "2024-03-18T06:58:27",
        "updatedAt": "2024-07-27T12:01:09"
      },
      {
        "name": "Sabrina Martins",
        "email": "pedro-lucas71@uol.com.br",
        "cpf": "193.047.658-20",
        "isActive": true,
        "role": "student",
        "createdAt": "2024-03-21T12:58:17",
        "updatedAt": "2024-08-23T09:56:58"
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
