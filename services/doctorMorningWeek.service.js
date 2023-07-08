const { models } = require('../libs/sequelize')
const boom = require('@hapi/boom')

class DoctorMorningWeekService {
  constructor(){}

  async getDoctors(){
    const values = await models.DoctorMorningWeek.findAll()
    if (!values) throw boom.notFound()
    else return values
  }

  async findOne(id){
    const value = await models.DoctorMorningWeek.findByPk(id)
    if (!value) { 
      return {
        message: 'Horary not found'
      }
    }
    return value
  }

  async create(body){
    const newDoctor = await models.DoctorMorningWeek.create(body)
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

module.exports = DoctorMorningWeekService