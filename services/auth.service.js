const { models } = require('../libs/sequelize')
const boom = require('@hapi/boom')
const bcrypt = require('bcrypt')
const { config } = require('../config/config')
const jwt = require('jsonwebtoken')

// const UserService = require('./user.service')
// const service = new UserService()

class AuthService {
  constructor() { }

  async getUser(email, password) {
    const user = await models.User.findOne({
      where: {
        email: email
      }
    })

    if (!user) {
      return {
        message: 'User not found'
      }
    }

    const validatePassword = await bcrypt.compare(password, user.password)

    if (!validatePassword) {
      throw boom.unauthorized()
    }

    return user
  }

  async signToken(user){

    const payload = {
      sub: user.id,
      role: user.role
    }

    const token = jwt.sign(payload, config.secretKey)
    return token;
  }

}

module.exports = AuthService

