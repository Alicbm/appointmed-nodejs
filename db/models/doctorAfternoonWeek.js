const { Model, DataTypes } = require('sequelize')
const { DOCTOR_TABLE } = require('./doctor.model')

const DOCTOR_AFTERNOON_WEEK_TABLE = 'doctors_afternoon_week'

const DoctorAfternoonWeekModel = {
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

class DoctorAfternoonWeek extends Model {
  static associate(models) {
    this.belongsTo(models.Doctor, { as: 'doctors', foreignKey: 'doctorId'})
  }

  static config(sequelize) {
    return {
      sequelize,
      tableName: DOCTOR_AFTERNOON_WEEK_TABLE,
      modelName: 'DoctorAfternoonWeek',
      timestamps: false
    }
  }
}

module.exports = { DoctorAfternoonWeek, DOCTOR_AFTERNOON_WEEK_TABLE, DoctorAfternoonWeekModel }