const { models } = require('../libs/sequelize')
const boom = require('@hapi/boom')

class DoctorService {
  constructor(){}

  async getDoctors(){
    const doctors = await models.Doctor.findAll({
      include: ['reviews', 'morning_schedule', 'afternoon_schedule']
    })
    if (!doctors) throw boom.notFound()
    else return doctors
  }

  async findOne(id){
    const doctor = await models.Doctor.findByPk(id)
    if (!doctor) { 
      return {
        message: 'Doctor not found'
      }
    }
    return doctor
  }

  async create(body){
    const newDoctor = await models.Doctor.create(body)
    return newDoctor
  }

  async update(id, body){
    const doctor = await this.findOne(id)
    const res = await doctor.update(body)
    return res
  }

  async delete(id){
    const doctor = await this.findOne(id)
    await doctor.destroy()
    return doctor    
  }
}

module.exports = DoctorService