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

    await queryInterface.renameColumn('comments', 'sightings_comments', 'sighting_comment');
    await queryInterface.renameColumn('comments', 'sightings_id', 'sighting_id');
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.renameColumn('comments', 'sighting_comment', 'sightings_comments');
    await queryInterface.renameColumn('comments', 'sighting_id', 'sightings_id');
  }
};
