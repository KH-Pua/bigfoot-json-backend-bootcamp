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

    //Secondary Table has one foreign key, and this table is reference another table's primary key.
    await queryInterface.createTable('comments', {
      id: {
        allowNull: false, //CONSTRAINT
        autoIncrement: true, //CONSTRAINT
        primaryKey: true, //CONSTRAINT
        type: Sequelize.INTEGER //DATA TYPE 
      },
      sightings_comments: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      //FOREIGN KEY COLUMN
      sightings_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'sightings',
          key: 'id'
        }
      },
      created_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      },
      updated_at: {
        type: Sequelize.DATE,
        defaultValue: new Date(),
      }
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('comments');
  }
};
