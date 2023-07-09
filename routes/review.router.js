const express = require('express')
const router = express.Router()

const ReviewService = require('../services/review.service')
const validatorHandler = require('../middlewares/validator.handler')
const { getReview, createReview, updateReview } = require('../schemas/review.schema')
const service = new ReviewService()

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
  validatorHandler(createReview, 'body'),
  async (req, res) => {
    const body = req.body
    console.log(body);  
    const newDoctor = await service.create(body)
    res.json(newDoctor)
  })

router.patch('/',
  validatorHandler(updateReview, 'params'),
  validatorHandler(updateReview, 'body'),
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