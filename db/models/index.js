const { Category, CategorySchema } = require("./category.model");
const { Doctor, DoctorSchema } = require("./doctor.model");
const { DoctorAfternoonWeek, DoctorAfternoonWeekModel } = require("./doctorAfternoonWeek");
const { DoctorMorningWeek, DoctorMorningWeekModel } = require("./doctorMorningWeek");
const { Review, ReviewModel } = require("./review.model");
const { User, UserSchema } = require("./user.model");
const { UserAfternoonWeek, UserAfternoonWeekModel } = require("./userAfternoonWeek");
const { UserMorningWeek, UserMorningWeekModel } = require("./userMorningWeek");

function setupModels(sequelize){
  Category.init(CategorySchema, Category.config(sequelize))
  User.init(UserSchema, User.config(sequelize))
  UserMorningWeek.init(UserMorningWeekModel, UserMorningWeek.config(sequelize))
  UserAfternoonWeek.init(UserAfternoonWeekModel, UserAfternoonWeek.config(sequelize))
  Doctor.init(DoctorSchema, Doctor.config(sequelize))
  Review.init(ReviewModel, Review.config(sequelize))
  DoctorMorningWeek.init(DoctorMorningWeekModel, DoctorMorningWeek.config(sequelize))
  DoctorAfternoonWeek.init(DoctorAfternoonWeekModel, DoctorAfternoonWeek.config(sequelize))

  Category.associate(sequelize.models)
  User.associate(sequelize.models)
  UserMorningWeek.associate(sequelize.models)
  UserAfternoonWeek.associate(sequelize.models)
  Doctor.associate(sequelize.models)
  Review.associate(sequelize.models)
  DoctorMorningWeek.associate(sequelize.models)
  DoctorAfternoonWeek.associate(sequelize.models)
}

module.exports = setupModels