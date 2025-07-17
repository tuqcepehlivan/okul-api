'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Course extends Model {
    
    static associate(models) {
      this.belongsTo(models.User, {
        foreignKey: "teacherId",
        as: "teacher",
      });

      Course.belongsToMany(models.User, {
        through: "UserDers",
        foreignKey: "classroomId",
        otherKey: "userId",
        as: "students"
      });

      this.hasMany(models.Attendance, { foreignKey: "courseId", as: "attendance" });
    }
  }
  Course.init({
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    teacherId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Course',
    tableName: 'Course',
    timestamps: false,
  });
  return Course;
};