const { Doctor, DoctorSchema } = require("./doctor.model");
const { DoctorAfternoonWeek } = require("./doctorAfternoonWeek");
const { DoctorMorningWeek } = require("./doctorMorningWeek");
const { Review, ReviewModel } = require("./review.model");
const { User, UserSchema } = require("./user.model");
const { UserAfternoonWeek, UserAfternoonWeekModel } = require("./userAfternoonWeek");
const { UserMorningWeek, UserMorningWeekModel } = require("./userMorningWeek");

function setupModels(sequelize){
  User.init(UserSchema, User.config(sequelize))
  UserMorningWeek.init(UserMorningWeekModel, UserMorningWeek.config(sequelize))
  UserAfternoonWeek.init(UserAfternoonWeekModel, UserAfternoonWeek.config(sequelize))
  Doctor.init(DoctorSchema, Doctor.config(sequelize))
  Review.init(ReviewModel, Review.config(sequelize))
  DoctorMorningWeek.init(UserSchema, DoctorMorningWeek.config(sequelize))
  DoctorAfternoonWeek.init(UserSchema, DoctorAfternoonWeek.config(sequelize))

  User.associate(sequelize.models)
  UserMorningWeek.associate(sequelize.models)
  UserAfternoonWeek.associate(sequelize.models)
  Doctor.associate(sequelize.models)
  Review.associate(sequelize.models)
  DoctorMorningWeek.associate(sequelize.models)
  DoctorAfternoonWeek.associate(sequelize.models)
}

module.exports = setupModels