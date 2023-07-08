const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string()
const email = Joi.string()
const cellphone = Joi.string()
const city = Joi.string()
const role = Joi.string()
const speciality = Joi.string()
const image = Joi.string()

const getDoctor = Joi.object({
  id: id.required(),
})

const createDoctor = Joi.object({
  name: name.required(),
  email: email.required(),
  cellphone: cellphone.required(),
  city: city.required(),
  role: role.required(),
  speciality: speciality.required(),
  image: image.required(),
})

const updateDoctor = Joi.object({
  name: name.optional(),
  email: email.optional(),
  cellphone: cellphone.optional(),
  city: city.optional(),
  role: role.optional(),
  speciality: speciality.optional(),
  image: image.optional(),
})

module.exports = { getDoctor, createDoctor, updateDoctor }