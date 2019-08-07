'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Books', [{
      id: 1,
      title: 'Node Js ',
      description: 'Buku Node',
      publised : 2019,
      author : 'Dawam Raja',
      createdAt : new Date(),
      updatedAt : new Date(),
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.bulkDelete('Books', {})
  }
};
