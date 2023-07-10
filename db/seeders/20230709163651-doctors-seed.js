'use strict';

const { DOCTOR_TABLE } = require('../models/doctor.model')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {    
    const doctors = [
      {
        name: "Bobby Fisher",
        email: "fisher@mail.com",
        cellphone: "65763753",
        city: "Santa Marta",
        role: "doctor",
        speciality: "Surgeon",
        image: "https://fisher.image.com",        
      }, {
        name: "Ricardo Gómez",
        email: "gomez@mail.com",
        cellphone: "65567653",
        city: "Santa Marta",
        role: "doctor",
        speciality: "Surgeon",
        image: "https://gomez.image.com",        
      }, {
        name: "Luis Peralta",
        email: "peralta@mail.com",
        cellphone: "64677653",
        city: "Bogotá",
        role: "doctor",
        speciality: "Surgeon",
        image: "https://peralta.image.com",        
      }, {
        name: "Arcadio Buendía",
        email: "buendia@mail.com",
        cellphone: "64677653",
        city: "Santa Marta",
        role: "doctor",
        speciality: "Dermatologist",
        image: "https://buendia.image.com",        
      }, {
        name: "Manuel Pedraza",
        email: "pedraza@mail.com",
        cellphone: "64677653",
        city: "Barranquilla",
        role: "doctor",
        speciality: "Dermatologist",
        image: "https://pedraza.image.com",        
      }, {
        name: "Daniela Pertuz",
        email: "pertuz@mail.com",
        cellphone: "64677653",
        city: "Valledupar",
        role: "doctor",
        speciality: "Dermatologist",
        image: "https://pertuz.image.com",        
      }, {
        name: "Cristina Martinez",
        email: "martinez@mail.com",
        cellphone: "5786587",
        city: "Santa Marta",
        role: "doctor",
        speciality: "Gynecologist",
        image: "https://martinez.image.com",        
      }, {
        name: "Francisco De la Rosa",
        email: "delarosa@mail.com",
        cellphone: "5786587",
        city: "Bogotá",
        role: "doctor",
        speciality: "Gynecologist",
        image: "https://delarosa.image.com",        
      }, {
        name: "Laura Santander",
        email: "santander@mail.com",
        cellphone: "5786587",
        city: "Santa Marta",
        role: "doctor",
        speciality: "Gynecologist",
        image: "https://santander.image.com",        
      },
      {
        name: "Pepe Cerrejon",
        email: "cerrejon@mail.com",
        cellphone: "5786587",
        city: "Cartagena",
        role: "doctor",
        speciality: "Psychiatrist",
        image: "https://cerrejon.image.com",        
      },{
        name: "Lucas Arango",
        email: "arango@mail.com",
        cellphone: "5786587",
        city: "Bogotá",
        role: "doctor",
        speciality: "Psychiatrist",
        image: "https://arango.image.com",        
      },{
        name: "Melisa Fuentes",
        email: "fuente@mail.com",
        cellphone: "5786587",
        city: "Santa Marta",
        role: "doctor",
        speciality: "Psychiatrist",
        image: "https://fuente.image.com",        
      },
    ]

    await queryInterface.bulkInsert(DOCTOR_TABLE, doctors, {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete(DOCTOR_TABLE, null, {});
  }
};
