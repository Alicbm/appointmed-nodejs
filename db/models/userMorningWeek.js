const { Model, DataTypes } = require('sequelize')
const { USER_TABLE } = require('./user.model')

const USER_MORNING_WEEK_TABLE = 'users_morning_week'

const UserMorningWeekModel = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  mondayStart: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  mondayEnd: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  tuesdayStart: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  tuesdayEnd: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  wednesdayStart: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  wednesdayEnd: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  thursdayStart: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  thursdayEnd: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  fridayStart: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  fridayEnd: {
    allowNull: true,
    type: DataTypes.INTEGER,
  },
  userId: {
    field: 'user_id',
    allowNull: true,
    type: DataTypes.INTEGER,
    references: {
      model: USER_TABLE,
      key: 'id'
    },
    onUpdate: 'CASCADE',
    onDelete: 'SET NULL'
  }
}

class UserMorningWeek extends Model {
  static associate(models) {
    this.belongsTo(models.User, { as: 'users', foreignKey: 'userId'})
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_MORNING_WEEK_TABLE,
      modelName: 'UserMorningWeek',
      timestamps: false
    }
  }
}

module.exports = { UserMorningWeek, USER_MORNING_WEEK_TABLE, UserMorningWeekModel }