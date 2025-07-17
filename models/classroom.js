'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Classroom extends Model {
    
    static associate(models) {
      this.hasMany(models.Student, { foreignKey: "classroomId", as: "students" });
    }
  }
  Classroom.init({
    name: DataTypes.STRING,
    sube: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Classroom',
  });
  return Classroom;
};