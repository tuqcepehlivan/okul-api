'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn("Ogrencis", "sinifId", {
      type: Sequelize.INTEGER,
      references: {
        model: "Sinifs", 
        key:"id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
      allowNull: true,
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn("ogrencis", "sinifId");
     
  },
};
