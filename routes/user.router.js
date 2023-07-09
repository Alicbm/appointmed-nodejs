const express = require('express')
const router = express.Router()

const UserService = require('../services/user.service')
const validatorHandler = require('../middlewares/validator.handler')
const { getUser, createUser, updateUser } = require('../schemas/user.schema')
const service = new UserService()

router.get('/',
  async (req, res) => {
    const doctors = await service.getDoctors()
    res.json(doctors)
  })

router.get('/:id',
  validatorHandler(getUser, 'params'),
  async (req, res) => {
    const doctor = await service.findOne(req.params.id)
    res.json(doctor)
  })

router.post('/',
  validatorHandler(createUser, 'body'),
  async (req, res) => {
    const body = req.body
    console.log(body);  
    const newDoctor = await service.create(body)
    res.json(newDoctor)
  })

router.patch('/',
  validatorHandler(updateUser, 'params'),
  validatorHandler(updateUser, 'body'),
  async (req, res) => {
    const doctor = await service.update(req.params.id, req.body)
    res.json(doctor)
  })

router.delete('/:id',
  async (req, res) => {
    const doctor = await service.delete(req.params.id)
    res.json(doctor)
  })

module.exports = router