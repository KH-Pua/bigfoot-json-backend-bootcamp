const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
    static associate(models) {
      // Create associate in here.
      // (M-M associations, need to have an object "{through: <table_name>}"" behind "belongsToMany")
      Category.belongsToMany(models.sighting, {
        through: "sightings_categories",
      });
    }
  }
  //Use JS Syntax here (camelCase) for the key.
  Category.init(
    {
      weatherCategory: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
    },
    {
      sequelize,
      modelName: "category",
      // Tell sequelize to make it updates the "updated_at" & "created_at"
      timestamps: true,
      underscored: true,
      // Sequelize: snake_case;
      // JS: camelCase;
    }
  );
  return Category;
};
