'use strict';

const { DOCTOR_MORNING_WEEK_TABLE } = require('../models/doctorMorningWeek')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    const doctorsMorning = [
      {
        monday_start: 8,
        monday_end: 12,
        tuesday_start: 8,
        tuesday_end: 11,
        wednesday_start: 8,
        wednesday_end: 12,
        thursday_start: 8,
        thursday_end: 12,
        friday_start: 9,
        friday_end: 12,
        doctor_id: 1
      }, {
        monday_start: 8,
        monday_end: 12,
        tuesday_start: 8,
        tuesday_end: 12,
        wednesday_start: 8,
        wednesday_end: 12,
        thursday_start: 8,
        thursday_end: 12,
        friday_start: 8,
        friday_end: 12,
        doctor_id: 2
      }, {
        monday_start: 7,
        monday_end: 11,
        tuesday_start: 7,
        tuesday_end: 11,
        wednesday_start: 7,
        wednesday_end: 11,
        thursday_start: 7,
        thursday_end: 11,
        friday_start: 9,
        friday_end: 11,
        doctor_id: 3
      }, {
        monday_start: 9,
        monday_end: 12,
        tuesday_start: 9,
        tuesday_end: 11,
        wednesday_start: 9,
        wednesday_end: 12,
        thursday_start: 9,
        thursday_end: 12,
        friday_start: 9,
        friday_end: 12,
        doctor_id: 4
      }, {
        monday_start: 8,
        monday_end: 12,
        tuesday_start: 8,
        tuesday_end: 11,
        wednesday_start: 8,
        wednesday_end: 12,
        thursday_start: 8,
        thursday_end: 12,
        friday_start: 9,
        friday_end: 12,
        doctor_id: 5
      }, {
        monday_start: 8,
        monday_end: 12,
        tuesday_start: 8,
        tuesday_end: 11,
        wednesday_start: 8,
        wednesday_end: 12,
        thursday_start: 8,
        thursday_end: 12,
        friday_start: 9,
        friday_end: 12,
        doctor_id: 6
      }, {
        monday_start: 8,
        monday_end: 12,
        tuesday_start: 8,
        tuesday_end: 11,
        wednesday_start: 8,
        wednesday_end: 12,
        thursday_start: 8,
        thursday_end: 12,
        friday_start: 9,
        friday_end: 12,
        doctor_id: 7
      }, {
        monday_start: 8,
        monday_end: 12,
        tuesday_start: 8,
        tuesday_end: 11,
        wednesday_start: 8,
        wednesday_end: 12,
        thursday_start: 8,
        thursday_end: 12,
        friday_start: 9,
        friday_end: 12,
        doctor_id: 8
      }, {
        monday_start: 8,
        monday_end: 12,
        tuesday_start: 8,
        tuesday_end: 11,
        wednesday_start: 8,
        wednesday_end: 12,
        thursday_start: 8,
        thursday_end: 12,
        friday_start: 9,
        friday_end: 12,
        doctor_id: 9
      }, {
        monday_start: 8,
        monday_end: 12,
        tuesday_start: 8,
        tuesday_end: 11,
        wednesday_start: 8,
        wednesday_end: 12,
        thursday_start: 8,
        thursday_end: 12,
        friday_start: 9,
        friday_end: 12,
        doctor_id: 10
      }, {
        monday_start: 8,
        monday_end: 12,
        tuesday_start: 8,
        tuesday_end: 11,
        wednesday_start: 8,
        wednesday_end: 12,
        thursday_start: 8,
        thursday_end: 12,
        friday_start: 9,
        friday_end: 12,
        doctor_id: 11
      }, {
        monday_start: 8,
        monday_end: 12,
        tuesday_start: 8,
        tuesday_end: 11,
        wednesday_start: 8,
        wednesday_end: 12,
        thursday_start: 8,
        thursday_end: 12,
        friday_start: 9,
        friday_end: 12,
        doctor_id: 12
      }, 
    ]

    await queryInterface.bulkInsert(DOCTOR_MORNING_WEEK_TABLE, doctorsMorning, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(DOCTOR_MORNING_WEEK_TABLE, null, {});
  }
};
