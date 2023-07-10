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
const userId =  Joi.number().integer()

const getUserHorarygWeek = Joi.object({
  id: id.required()
})

const createUserHoraryWeek = Joi.object({
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
  userId: userId.required()
})

const updateUserHoraryWeek = Joi.object({
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
  userId: userId.optional()
})

module.exports = { getUserHorarygWeek, updateUserHoraryWeek,  createUserHoraryWeek}
