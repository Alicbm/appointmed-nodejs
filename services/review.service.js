const { models } = require('../libs/sequelize')
const boom = require('@hapi/boom')

class ReviewService {
  constructor(){}

  async getDoctors(){
    const reviews = await models.Review.findAll()
    if (!reviews) throw boom.notFound()
    else return reviews
  }

  async findOne(id){
    const review = await models.Review.findByPk(id)
    if (!review) { 
      return {
        message: 'Review not found'
      }
    }
    return review
  }

  async create(body){
    const newReview = await models.Review.create(body)
    return newReview
  }

  async update(id, body){
    const review = await this.findOne(id)
    const res = await review.update(body)
    return res
  }

  async delete(id){
    const review = await this.findOne(id)
    await review.destroy()
    return review    
  }
}

module.exports = ReviewService