const express = require('express')
const router = express.Router()

const DoctorMorningWeekService = require('../services/doctorMorningWeek.service')
const validatorHandler = require('../middlewares/validator.handler')

const { checkRoles } = require('../middlewares/auth.handler')
const { 
  getDoctorHorarygWeek, 
  createDoctorHoraryWeek, 
  updateDoctorHoraryWeek 
} = require('../schemas/doctorWeek.schema')

const service = new DoctorMorningWeekService()

router.get('/',
  async (req, res) => {
    const values = await service.getDoctors()
    res.json(values)
  })

router.get('/:id',
  validatorHandler(getDoctorHorarygWeek, 'params'),
  async (req, res) => {
    const value = await service.findOne(req.params.id)
    res.json(value)
  })

router.post('/',
  checkRoles('admin'),
  validatorHandler(createDoctorHoraryWeek, 'body'),
  async (req, res) => {
    const newDoctor = await service.create(req.body)
    res.json(newDoctor)
  })

router.patch('/',
  checkRoles('admin'),
  validatorHandler(updateDoctorHoraryWeek, 'params'),
  validatorHandler(updateDoctorHoraryWeek, 'body'),
  async (req, res) => {
    const value = await service.update(req.params.id, req.body)
    res.json(value)
  })

router.delete('/:id',
  checkRoles('admin'),  
  async (req, res) => {
    const value = await service.delete(req.params.id)
    res.json(value)
  })

module.exports = router