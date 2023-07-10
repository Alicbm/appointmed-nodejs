const { Model, DataTypes } = require('sequelize')
const { DOCTOR_TABLE } = require('./doctor.model')

const DOCTOR_MORNING_WEEK_TABLE = 'doctors_morning_week'

const DoctorMorningWeekModel = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER
  },
  mondayStart: {
    allowNull: true,
    type: DataTypes.INTEGER,
    field: 'monday_start'
  },
  mondayEnd: {
    allowNull: true,
    type: DataTypes.INTEGER,
    field: 'monday_end'
  },
  tuesdayStart: {
    allowNull: true,
    type: DataTypes.INTEGER,
    field: 'tuesday_start'
  },
  tuesdayEnd: {
    allowNull: true,
    type: DataTypes.INTEGER,
    field: 'tuesday_end'
  },
  wednesdayStart: {
    allowNull: true,
    type: DataTypes.INTEGER,
    field: 'wednesday_start'
  },
  wednesdayEnd: {
    allowNull: true,
    type: DataTypes.INTEGER,
    field: 'wednesday_end'
  },
  thursdayStart: {
    allowNull: true,
    type: DataTypes.INTEGER,
    field: 'thursday_start'
  },
  thursdayEnd: {
    allowNull: true,
    type: DataTypes.INTEGER,
    field: 'thursday_end'
  },
  fridayStart: {
    allowNull: true,
    type: DataTypes.INTEGER,
    field: 'friday_start'
  },
  fridayEnd: {
    allowNull: true,
    type: DataTypes.INTEGER,
    field: 'friday_end'
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

class DoctorMorningWeek extends Model {
  static associate(models) {
    this.belongsTo(models.Doctor, { as: 'doctors', foreignKey: 'doctorId'})
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: DOCTOR_MORNING_WEEK_TABLE,
      modelName: 'DoctorMorningWeek',
      timestamps: false
    }
  }
}

module.exports = { DoctorMorningWeek, DOCTOR_MORNING_WEEK_TABLE, DoctorMorningWeekModel }