const express = require('express')
const router = express.Router()

const DoctorService = require('../services/doctor.service')
const validatorHandler = require('../middlewares/validator.handler')
const { getDoctor, createDoctor, updateDoctor } = require('../schemas/doctor.schema')
const { checkRoles } = require('../middlewares/auth.handler')
const service = new DoctorService()

router.get('/',
  async (req, res) => {
    const doctors = await service.getDoctors()
    res.json(doctors)
  })

router.get('/:id',
  validatorHandler(getDoctor, 'params'),
  async (req, res) => {
    const doctor = await service.findOne(req.params.id)
    res.json(doctor)
  })

router.post('/',
  checkRoles('admin'),
  validatorHandler(createDoctor, 'body'),
  async (req, res) => {
    const body = req.body
    console.log(body);  
    const newDoctor = await service.create(body)
    res.json(newDoctor)
  })

router.patch('/',
  checkRoles('admin'),
  validatorHandler(updateDoctor, 'params'),
  validatorHandler(updateDoctor, 'body'),
  async (req, res) => {
    const doctor = await service.update(req.params.id, req.body)
    res.json(doctor)
  })

router.delete('/:id',
  checkRoles('admin'),
  async (req, res) => {
    const doctor = await service.delete(req.params.id)
    res.json(doctor)
  })

module.exports = router