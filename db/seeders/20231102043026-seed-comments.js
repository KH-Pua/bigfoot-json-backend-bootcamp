'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('comments', 
   [
    {
      sightings_comments: "Hallelujah to Ed L.",
      sightings_id: 8,
      created_at: new Date(),
      updated_at: new Date()
    }, 
    {
      sightings_comments: "Your notes is too long, and its hard to read!",
      sightings_id: 9,
      created_at: new Date(),
      updated_at: new Date()
    }, 
    {
      sightings_comments: "From Claremont to Lebanon is so far away!!",
      sightings_id: 10,
      created_at: new Date(),
      updated_at: new Date()
    }
   ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('comments', null, {});
  }
};
