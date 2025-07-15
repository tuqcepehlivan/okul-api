'use strict';

const { NOW, QueryInterface } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    
     await queryInterface.createTable("UserDers", {
      userid: {
       type: Sequelize.INTEGER,
       references: {
        model: "Users",
        key: "id"
       
    },
    
      onDelete: "CASCADE",
      allowNull: false
    },
    dersId: {
      type: Sequelize.INTEGER,
      references: {
        model: "Ders",
        key: "id"
      },
      onDelete: "CASCADE",
      allowNull: false
    },
    cratedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn("NOW")
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.fn("NOW")
    }
    });
     
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable("UserDers");
  }
};
