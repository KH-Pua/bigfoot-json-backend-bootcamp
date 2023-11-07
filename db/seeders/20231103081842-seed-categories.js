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
    await queryInterface.bulkInsert('categories', 
    [
      {
        weather_category: "Sunny",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weather_category: "Raining",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weather_category: "Cloudy",
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        weather_category: "Snowing",
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
    await queryInterface.bulkDelete('categories', null, {});
  }
};
