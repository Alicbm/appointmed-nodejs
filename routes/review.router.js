const express = require('express')
const router = express.Router()

const ReviewService = require('../services/review.service')
const service = new ReviewService()

const validatorHandler = require('../middlewares/validator.handler')
const { checkRoles } = require('../middlewares/auth.handler')
const { 
  getReview, 
  createReview, 
  updateReview 
} = require('../schemas/review.schema')

router.get('/',
  async (req, res) => {
    const doctors = await service.getDoctors()
    res.json(doctors)
  })

router.get('/:id',
  validatorHandler(getReview, 'params'),
  async (req, res) => {
    const doctor = await service.findOne(req.params.id)
    res.json(doctor)
  })

router.post('/',
  checkRoles('admin'),
  validatorHandler(createReview, 'body'),
  async (req, res) => {
    const body = req.body
    console.log(body);  
    const newDoctor = await service.create(body)
    res.json(newDoctor)
  })

router.patch('/',
  checkRoles('admin'),  
  validatorHandler(updateReview, 'params'),
  validatorHandler(updateReview, 'body'),
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