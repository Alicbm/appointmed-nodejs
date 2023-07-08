const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string()
const email = Joi.string()
const cellphone = Joi.string()
const city = Joi.string()
const role = Joi.string()

const getUser = Joi.object({
  id: id.required(),
})

const createUser = Joi.object({
  name: name.required(),
  email: email.required(),
  cellphone: cellphone.required(),
  city: city.required(),
  role: role.required(),
})

const updateUser = Joi.object({
  name: name.optional(),
  email: email.optional(),
  cellphone: cellphone.optional(),
  city: city.optional(),
  role: role.optional(),
})

module.exports = { getUser, createUser, updateUser }