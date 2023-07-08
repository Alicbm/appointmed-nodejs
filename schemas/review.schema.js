const Joi =  require('joi')

const id = Joi.number().integer()
const body = Joi.string()
const score = Joi.string()

const getReview = Joi.object({
  id: id.required()
})

const createReview = Joi.object({
  body: body.required(),
  score: score.required(),
})

const updateReview = Joi.object({
  body: body.optional(),
  score: score.optional(),
})

module.exports = { getReview, createReview, updateReview }