const express = require('express')
const router = express.Router()

const UserMorningWeekService = require('../services/userMorningWeek.service')
const validatorHandler = require('../middlewares/validator.handler')

const { 
  getUserHorarygWeek, 
  createUserHoraryWeek, 
  updateUserHoraryWeek 
} = require('../schemas/userWeek.schema')

const service = new UserMorningWeekService()

router.get('/',
  async (req, res) => {
    const values = await service.getDoctors()
    res.json(values)
  })

router.get('/:id',
  validatorHandler(getUserHorarygWeek, 'params'),
  async (req, res) => {
    const value = await service.findOne(req.params.id)
    res.json(value)
  })

router.post('/',
  validatorHandler(createUserHoraryWeek, 'body'),
  async (req, res) => {
    const newDoctor = await service.create(req.body)
    res.json(newDoctor)
  })

router.patch('/',
  validatorHandler(updateUserHoraryWeek, 'params'),
  validatorHandler(updateUserHoraryWeek, 'body'),
  async (req, res) => {
    const value = await service.update(req.params.id, req.body)
    res.json(value)
  })

router.delete('/:id',
  async (req, res) => {
    const value = await service.delete(req.params.id)
    res.json(value)
  })

module.exports = router