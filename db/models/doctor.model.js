const { Model, DataTypes } = require('sequelize')

const DOCTOR_TABLE = 'doctors'

const DoctorSchema = {
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
  },
  speciality: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'general'
  },
  image: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}

class Doctor extends Model {

  static associate(models) {
    this.hasMany(models.Review, { as: 'reviews', foreignKey: 'doctorId' })
    this.hasMany(models.DoctorMorningWeek, { as: 'morning_schedule', foreignKey: 'doctorId' })
    this.hasMany(models.DoctorAfternoonWeek, { as: 'afternoon_schedule', foreignKey: 'doctorId' })
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: DOCTOR_TABLE,
      modelName: 'Doctor',
      timestamps: false
    }
  }
}

module.exports = { Doctor, DOCTOR_TABLE, DoctorSchema }