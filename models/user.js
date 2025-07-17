'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      this.hasMany(models.Course, {
        foreignKey: "teacherId",
        as: "courses",
      });

      this.belongsTo(models.Classroom, {
        foreignKey: "classroomId",
        as: "classroom",
      });

      this.hasMany(models.Attendance, { 
        foreignKey: "studentId", 
        as: "attendances"
      });

      this.belongsToMany(models.Course, {
        through: "UserCourse",
        foreignKey: "userId",
        otherKey: "courseId",
        as: "coursesTaken"
      });

    }
  } 
    
     
  User.init({
    name: DataTypes.STRING,
    surname: DataTypes.STRING,
    number: DataTypes.INTEGER,
    role: DataTypes.ENUM("student", "teacher"),
    ClassroomId: DataTypes.INTEGER,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};