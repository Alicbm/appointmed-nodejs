const express = require('express')
const DoctorRouter = require('./doctor.router')
const DoctorMorningWeekRouter = require('./doctorMorningWeek.router')

function routerApi(app){
  const router = express.Router()
  app.use('/api/v1', router)

  router.use('/doctors', DoctorRouter)
  router.use('/doctors-morning', DoctorMorningWeekRouter)
}

module.exports = routerApi