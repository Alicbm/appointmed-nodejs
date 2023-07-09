const { models } = require('../libs/sequelize')
const boom = require('@hapi/boom')

class UserService {
  constructor(){}

  async getDoctors(){
    const users = await models.User.findAll()
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
    const newUser = await models.User.create(body)
    return newUser
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