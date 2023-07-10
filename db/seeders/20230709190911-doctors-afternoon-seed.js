'use strict';

const { DOCTOR_AFTERNOON_WEEK_TABLE } = require('../models/doctorAfternoonWeek')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const doctorsAfternoon = [
      {
        monday_start: 2,
        monday_end: 5,
        tuesday_start: 2,
        tuesday_end: 6,
        wednesday_start: 2,
        wednesday_end: 5,
        thursday_start: 2,
        thursday_end: 5,
        friday_start: 2,
        friday_end: 5,
        doctor_id: 1
      }, {
        monday_start: 2,
        monday_end: 5,
        tuesday_start: 2,
        tuesday_end: 5,
        wednesday_start: 2,
        wednesday_end: 5,
        thursday_start: 2,
        thursday_end: 5,
        friday_start: 2,
        friday_end: 5,
        doctor_id: 2
      }, {
        monday_start: 3,
        monday_end: 6,
        tuesday_start: 3,
        tuesday_end: 6,
        wednesday_start: 3,
        wednesday_end: 6,
        thursday_start: 3,
        thursday_end: 6,
        friday_start: 9,
        friday_end: 6,
        doctor_id: 3
      }, {
        monday_start: 2,
        monday_end: 5,
        tuesday_start: 2,
        tuesday_end: 6,
        wednesday_start: 2,
        wednesday_end: 5,
        thursday_start: 2,
        thursday_end: 5,
        friday_start: 2,
        friday_end: 5,
        doctor_id: 4
      }, {
        monday_start: 2,
        monday_end: 5,
        tuesday_start: 2,
        tuesday_end: 6,
        wednesday_start: 2,
        wednesday_end: 5,
        thursday_start: 2,
        thursday_end: 5,
        friday_start: 3,
        friday_end: 5,
        doctor_id: 5
      }, {
        monday_start: 2,
        monday_end: 5,
        tuesday_start: 2,
        tuesday_end: 6,
        wednesday_start: 2,
        wednesday_end: 5,
        thursday_start: 2,
        thursday_end: 5,
        friday_start: 3,
        friday_end: 5,
        doctor_id: 6
      }, {
        monday_start: 2,
        monday_end: 5,
        tuesday_start: 2,
        tuesday_end: 6,
        wednesday_start: 2,
        wednesday_end: 5,
        thursday_start: 2,
        thursday_end: 5,
        friday_start: 1,
        friday_end: 5,
        doctor_id: 7
      }, {
        monday_start: 2,
        monday_end: 5,
        tuesday_start: 2,
        tuesday_end: 6,
        wednesday_start: 2,
        wednesday_end: 5,
        thursday_start: 2,
        thursday_end: 5,
        friday_start: 1,
        friday_end: 5,
        doctor_id: 8
      }, {
        monday_start: 2,
        monday_end: 5,
        tuesday_start: 2,
        tuesday_end: 6,
        wednesday_start: 2,
        wednesday_end: 5,
        thursday_start: 2,
        thursday_end: 5,
        friday_start: 2,
        friday_end: 5,
        doctor_id: 9
      }, {
        monday_start: 2,
        monday_end: 5,
        tuesday_start: 2,
        tuesday_end: 6,
        wednesday_start: 2,
        wednesday_end: 5,
        thursday_start: 2,
        thursday_end: 5,
        friday_start: 2,
        friday_end: 4,
        doctor_id: 10
      }, {
        monday_start: 2,
        monday_end: 5,
        tuesday_start: 2,
        tuesday_end: 6,
        wednesday_start: 2,
        wednesday_end: 5,
        thursday_start: 2,
        thursday_end: 5,
        // friday_start: ,
        // friday_end: 5,
        doctor_id: 11
      }, {
        monday_start: 2,
        monday_end: 5,
        tuesday_start: 2,
        tuesday_end: 6,
        wednesday_start: 2,
        wednesday_end: 5,
        thursday_start: 2,
        thursday_end: 5,
        // friday_start: 9,
        // friday_end: 5,
        doctor_id: 12
      }, 
    ]

    await queryInterface.bulkInsert(DOCTOR_AFTERNOON_WEEK_TABLE, doctorsAfternoon, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(DOCTOR_AFTERNOON_WEEK_TABLE, null, {});
  }
};
