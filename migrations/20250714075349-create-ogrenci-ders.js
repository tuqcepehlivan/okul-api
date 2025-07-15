'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable("OgrenciDers", {
      id: {
       allowNull: false,
       autoIncrement: true,
       primaryKey: true,
       type: Sequelize.INTEGER
    },
    ogrenciId: {
      type: Sequelize.INTEGER,
      references: {
        model: "Ogrencis",
        key: "id"
      },
      onDelete: "CASCADE"
    },
    dersId: {
      type: Sequelize.INTEGER,
      references: {
        model: "Ders",
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
    
    await queryInterface.dropTable("OgrenciDers");
  }
};
