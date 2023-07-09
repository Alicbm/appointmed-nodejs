const Joi =  require('joi')

const id = Joi.number().integer()
const mondayStart =  Joi.number().integer()
const mondayEnd =  Joi.number().integer()
const tuesdayStart =  Joi.number().integer()
const tuesdayEnd =  Joi.number().integer()
const wednesdayStart =  Joi.number().integer()
const wednesdayEnd =  Joi.number().integer()
const thursdayStart =  Joi.number().integer()
const thursdayEnd =  Joi.number().integer()
const fridayStart =  Joi.number().integer()
const fridayEnd =  Joi.number().integer()

const getHorarygWeek = Joi.object({
  id: id.required()
})

const createUpdateHoraryWeek = Joi.object({
  mondayStart: mondayStart.optional(),
  mondayEnd: mondayEnd.optional(),
  tuesdayStart: tuesdayStart.optional(),
  tuesdayEnd: tuesdayEnd.optional(),
  wednesdayStart: wednesdayStart.optional(),
  wednesdayEnd: wednesdayEnd.optional(),
  thursdayStart: thursdayStart.optional(),
  thursdayEnd: thursdayEnd.optional(),
  fridayStart: fridayStart.optional(),
  fridayEnd: fridayEnd.optional(),
})

module.exports = { getHorarygWeek, createUpdateHoraryWeek }
