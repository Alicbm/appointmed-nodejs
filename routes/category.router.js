const express = require('express')
const router = express.Router()

const CategoryService = require('../services/category.service')
const validatorHandler = require('../middlewares/validator.handler')
const { getCategory, createCategory, updateCategory } = require('../schemas/category.schema')
// const { checkRoles } = require('../middlewares/auth.handler')
const service = new CategoryService()

router.get('/',
  async (req, res) => {
    const categories = await service.getCategories()
    res.json(categories)
  })

router.get('/:id',
  validatorHandler(getCategory, 'params'),
  async (req, res) => {
    const category = await service.findOne(req.params.id)
    res.json(category)
  })

router.post('/',
  // checkRoles('admin'),
  validatorHandler(createCategory, 'body'),
  async (req, res) => {
    const body = req.body
    console.log(body);  
    const newDoctor = await service.create(body)
    res.json(newDoctor)
  })

router.patch('/',
  // checkRoles('admin'),
  validatorHandler(updateCategory, 'params'),
  validatorHandler(updateCategory, 'body'),
  async (req, res) => {
    const category = await service.update(req.params.id, req.body)
    res.json(category)
  })

router.delete('/:id',
  // checkRoles('admin'),
  async (req, res) => {
    const category = await service.delete(req.params.id)
    res.json(category)
  })

module.exports = router