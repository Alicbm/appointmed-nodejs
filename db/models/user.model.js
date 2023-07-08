const { Model, DataTypes } = require('sequelize')

const USER_TABLE = 'users'

const UserSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  cellphone: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  city: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  role: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'user'
  }
}

class User extends Model {

  static associate(models) {
    this.hasMany(models.UserMorningWeek, { as: 'morning_schedule', foreignKey: 'userId' })
    this.hasMany(models.UserAfternoonWeek, { as: 'afternoon_schedule', foreignKey: 'userId' })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User',
      timestamps: false
    }
  }
}

module.exports = { User, USER_TABLE, UserSchema }