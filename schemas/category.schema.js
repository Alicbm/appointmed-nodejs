const Joi = require('joi')

const id = Joi.number().integer()
const name = Joi.string()
const image = Joi.string()

const getCategory = Joi.object({
  id: id.required()
})

const createCategory = Joi.object({
  name: name.required(),
  image: image.required(),  
})

const updateCategory = Joi.object({
  name: name.optional(),
  image: image.optional(),  
})

module.exports = { getCategory, createCategory, updateCategory }