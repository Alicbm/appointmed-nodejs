const express = require('express')
const router = express.Router()

const DoctorAfternoonWeekService = require('../services/doctorAfternoon.service')
const validatorHandler = require('../middlewares/validator.handler')
const { getHorarygWeek, createUpdateHoraryWeek } = require('../schemas/week.schema')
const service = new DoctorAfternoonWeekService()

router.get('/',
  async (req, res) => {
    const values = await service.getDoctors()
    res.json(values)
  })

router.get('/:id',
  validatorHandler(getHorarygWeek, 'params'),
  async (req, res) => {
    const value = await service.findOne(req.id)
    res.json(value)
  })

router.post('/',
  validatorHandler(createUpdateHoraryWeek, 'body'),
  async (req, res) => {
    const newDoctor = await service.create(req.body)
    res.json(newDoctor)
  })

router.patch('/',
  validatorHandler(createUpdateHoraryWeek, 'params'),
  validatorHandler(createUpdateHoraryWeek, 'body'),
  async (req, res) => {
    const value = await service.update(req.id, req.body)
    res.json(value)
  })

router.delete('/:id',
  async (req, res) => {
    const value = await service.delete(req.id)
    res.json(value)
  })

module.exports = router