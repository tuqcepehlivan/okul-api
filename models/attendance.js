'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Attendance extends Model {
    
    static associate(models) {
      this.belongsTo(models.User, { foreignKey: "studentId", as: "student"});
      this.belongsTo(models.Course, { foreignKey: "courseId", as: "course" });
      
    }
  }
  Attendance.init({
    studentId: DataTypes.INTEGER,
    courseId: DataTypes.INTEGER,
    date: DataTypes.DATE,
    durum: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Attendance',
  });
  return Attendance;
};