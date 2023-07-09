const { models } = require('../libs/sequelize')
const boom = require('@hapi/boom')

class DoctorAfternoonWeekService {
  constructor(){}

  async getDoctors(){
    const values = await models.DoctorAfternoonWeek.findAll()
    if (!values) throw boom.notFound()
    else return values
  }

  async findOne(id){
    const value = await models.DoctorAfternoonWeek.findByPk(id)
    if (!value) { 
      return {
        message: 'Horary not found'
      }
    }
    return value
  }

  async create(body){
    const newDoctor = await models.DoctorAfternoonWeek.create(body)
    return newDoctor
  }

  async update(id, body){
    const value = await this.findOne(id)
    const res = await value.update(body)
    return res
  }

  async delete(id){
    const value = await this.findOne(id)
    const res = await value.destroy()
    return value    
  }
}

module.exports = DoctorAfternoonWeekService