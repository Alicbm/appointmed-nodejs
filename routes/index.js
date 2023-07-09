const express = require('express')
const DoctorRouter = require('./doctor.router')
const ReviewRouter = require('./review.router')
const DoctorMorningWeekRouter = require('./doctorMorningWeek.router')
const DoctorAfternoonWeekRouter = require('./doctorAfternoonWeek.router')
const UserRouter = require('./user.router')
const UserMorningWeekRouter = require('./userMorningWeek.router')
const UserAfternoonWeekRouter = require('./userAfternoon.router')

function routerApi(app){
  const router = express.Router()
  app.use('/api/v1', router)

  router.use('/doctors', DoctorRouter)
  router.use('/reviews', ReviewRouter)
  router.use('/doctors-morning', DoctorMorningWeekRouter)
  router.use('/doctors-afternoon', DoctorAfternoonWeekRouter)
  router.use('/users', UserRouter)
  router.use('/users-morning', UserMorningWeekRouter)
  router.use('/users-afternoon', UserAfternoonWeekRouter)
}

module.exports = routerApi