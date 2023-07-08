const express = require('express')
const router = express.Router()

const DoctorMorningWeekService = require('../services/doctorMorningWeek.service')
const validatorHandler = require('../middlewares/validator.handler')
const { getMorningWeek, createUpdateMorningWeek } = require('../schemas/week.schema')
const service = new DoctorMorningWeekService()

router.get('/',
  async (req, res) => {
    const values = await service.getDoctors()
    res.json(values)
  })

router.get('/:id',
  validatorHandler(getMorningWeek, 'params'),
  async (req, res) => {
    const value = await service.findOne(req.id)
    res.json(value)
  })

router.post('/',
  validatorHandler(createUpdateMorningWeek, 'body'),
  async (req, res) => {
    const newDoctor = await service.create(req.body)
    res.json(newDoctor)
  })

router.patch('/',
  validatorHandler(createUpdateMorningWeek, 'params'),
  validatorHandler(createUpdateMorningWeek, 'body'),
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