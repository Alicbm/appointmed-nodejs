const { models } = require('../libs/sequelize')
const boom = require('@hapi/boom')

class CategoryService {
  constructor(){}

  async getCategories(){
    const categories = await models.Category.findAll({
      include: ['doctors']
    })
    if (!categories) throw boom.notFound()
    else return categories
  }

  async findOne(id){
    const category = await models.Category.findByPk(id)
    if (!category) { 
      return {
        message: 'Category not found'
      }
    }
    return category
  }

  async create(body){
    const newDoctor = await models.Category.create(body)
    return newDoctor
  }

  async update(id, body){
    const category = await this.findOne(id)
    const res = await category.update(body)
    return res
  }

  async delete(id){
    const category = await this.findOne(id)
    await category.destroy()
    return category    
  }
}

module.exports = CategoryService