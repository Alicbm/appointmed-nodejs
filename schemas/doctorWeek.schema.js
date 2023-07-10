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
const doctorId =  Joi.number().integer()

const getDoctorHorarygWeek = Joi.object({
  id: id.required()
})

const createDoctorHoraryWeek = Joi.object({
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
  doctorId: doctorId.required()
})

const updateDoctorHoraryWeek = Joi.object({
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
  doctorId: doctorId.optional()
})

module.exports = { getDoctorHorarygWeek, updateDoctorHoraryWeek,  createDoctorHoraryWeek}
