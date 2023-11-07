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
    await queryInterface.createTable('sightings_categories', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sighting_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'sightings',
          key: 'id'
        }
      },
      category_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'categories',
          key: 'id'
        }
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date()
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: new Date()
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
    await queryInterface.dropTable('sightings_categories');
  }
};
