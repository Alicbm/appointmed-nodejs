'use strict';
const { CATEGORY_TABLE } = require('../models/category.model')


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const categories = [
      {
        name: 'Psiquiatría',
        image: 'https://raw.githubusercontent.com/Alicbm/appointmed-nodejs/master/images/categories/psiquiatria.png',
      },
      {
        name: 'Pediatría',
        image: 'https://raw.githubusercontent.com/Alicbm/appointmed-nodejs/master/images/categories/pediatria.png',
      },
      {
        name: 'Medicina General',
        image: 'https://raw.githubusercontent.com/Alicbm/appointmed-nodejs/master/images/categories/medicina-general.png',
      },
      {
        name: 'Oftalmología',
        image: 'https://raw.githubusercontent.com/Alicbm/appointmed-nodejs/master/images/categories/oftalmologia.png',
      },
      {
        name: 'Odontología',
        image: 'https://raw.githubusercontent.com/Alicbm/appointmed-nodejs/master/images/categories/odontologia.png',
      },
      {
        name: 'Ginecología',
        image: 'https://raw.githubusercontent.com/Alicbm/appointmed-nodejs/master/images/categories/ginecologia.png',
      },
    ]

    await queryInterface.bulkInsert(CATEGORY_TABLE, categories, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(CATEGORY_TABLE, null, {});  }
};