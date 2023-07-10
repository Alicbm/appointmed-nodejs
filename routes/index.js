const express = require('express')
const passport = require('passport')
const { checkRoles } = require('../middlewares/auth.handler')

const DoctorRouter = require('./doctor.router')
const ReviewRouter = require('./review.router')
const DoctorMorningWeekRouter = require('./doctorMorningWeek.router')
const DoctorAfternoonWeekRouter = require('./doctorAfternoonWeek.router')
const UserRouter = require('./user.router')
const UserMorningWeekRouter = require('./userMorningWeek.router')
const UserAfternoonWeekRouter = require('./userAfternoon.router')
const authRouter = require('./auth.router')

function routerApi(app) {
  const router = express.Router()
  app.use('/api/v1', router)

  router.use(
    '/doctors',
    passport.authenticate('jwt', { session: false }),
    DoctorRouter
  )
  router.use(
    '/reviews',
    passport.authenticate('jwt', { session: false }),
    ReviewRouter
  )
  router.use(
    '/doctors-morning',
    passport.authenticate('jwt', { session: false }),
    DoctorMorningWeekRouter
  )
  router.use(
    '/doctors-afternoon',
    passport.authenticate('jwt', { session: false }),
    DoctorAfternoonWeekRouter
  )
  router.use(
    '/users',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin', 'user'),
    UserRouter
  )
  router.use(
    '/users-morning',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin', 'user'),
    UserMorningWeekRouter
  )
  router.use(
    '/users-afternoon',
    passport.authenticate('jwt', { session: false }),
    checkRoles('admin', 'user'),
    UserAfternoonWeekRouter
  )
  router.use('/auth', authRouter)
}

module.exports = routerApi