'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("StudentCourse", {
      id: {
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: Sequelize.INTEGER
    },
    studentId: {
      type: Sequelize.INTEGER,
      references: {
        model: "Students",
        key: "id"
      },
      onDelete: "CASCADE"
    },
    courseId: {
      type: Sequelize.INTEGER,
      references: {
        model: "Course",
        key: "id"
      },
      onDelete: "CASCADE"
    },
    cratedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP")
    }
    });
     
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable("StudentCourse");
  }
};
