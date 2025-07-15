'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      ad: {
        type: Sequelize.STRING
      },
      soyad: {
        type: Sequelize.STRING
      },
      numara: {
        type: Sequelize.INTEGER
      },
      role: {
        type: Sequelize.STRING
      },
      sinifId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Sinifs",
          key: "id",
        },
        onUpdate: "CASCADE",
        onDelete: "SET NULL",
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};