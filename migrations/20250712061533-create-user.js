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
        type: Sequelize.STRING,
        allowNull: false
      },
      soyad: {
        type: Sequelize.STRING,
        allowNull: false
      },
      email: {
        type: Sequelize.INTEGER,
        unique: true,
        allowNull: false
      },
      role: {
        type: Sequelize.ENUM("ogrenci", "ogretmen"),
        allowNull: false
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