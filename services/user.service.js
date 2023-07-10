const { models } = require('../libs/sequelize')
const boom = require('@hapi/boom')
const bcrypt = require('bcrypt')

class UserService {
  constructor(){}

  async getUsers(){
    const users = await models.User.findAll({
      include: ['morning_schedule', 'afternoon_schedule']
    })
    if (!users) throw boom.notFound()
    else return users
  }

  async findOne(id){
    const user = await models.User.findByPk(id)
    if (!user) { 
      return {
        message: 'User not found'
      }
    }
    return user
  }

  async create(body){
    const hashPassword = await bcrypt.hash(body.password, 10)
    const newUser = {
      ...body,
      password: hashPassword
    }

    const res = await models.User.create(newUser)
    delete res.dataValues.password
    return res
  }

  async update(id, body){
    const user = await this.findOne(id)
    const res = await user.update(body)
    return res
  }

  async delete(id){
    const user = await this.findOne(id)
    await user.destroy()
    return user    
  }
}

module.exports = UserService