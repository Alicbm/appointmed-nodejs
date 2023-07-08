const { Model, DataTypes } = require('sequelize')
const { DOCTOR_TABLE } = require('./doctor.model')

const REVIEW_TABLE = 'reviews'

const ReviewModel = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  body: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  score: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  doctorId: {
    field: 'doctor_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: DOCTOR_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class Review extends Model {
  static associate(models) {
    this.belongsTo(models.Doctor, { as: 'doctors'})
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: REVIEW_TABLE,
      modelName: 'Review',
      timestamps: false
    }
  }
}

module.exports = { Review, REVIEW_TABLE, ReviewModel }