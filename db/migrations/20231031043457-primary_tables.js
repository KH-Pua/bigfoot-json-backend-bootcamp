'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    //USE SEQUEL SYNTAX HERE(snake_case) for the key (e.g. date, location, notes)
    await queryInterface.createTable('sightings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      date: {
        allowNull: false,
        type: Sequelize.DATE
      },
      location: {
        allowNull: false,
        type: Sequelize.STRING  
      },
      notes: {
        allowNull: false,
        type: Sequelize.TEXT
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(), 
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      }
    })
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('sightings');
  }
};
