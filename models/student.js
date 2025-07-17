'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    
    static associate(models) {
      this.belongsTo(models.Classroom, { foreignKey: "classroomId", as: "classroom"});
      this.hasMany(models.Attendance, { foreignKey: "studentId", as: "attendances"});

      Student.belongsToMany(models.Course, {
        through: "StudentCourse",
        foreignKey: "studentId",
        otherKey: "courseId",
        as: "courses"
      })
    }
  }
  Student.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    number: DataTypes.INTEGER,
    classroomId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Student',
  });
  return Student;
};