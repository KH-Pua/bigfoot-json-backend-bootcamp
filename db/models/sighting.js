const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Sighting extends Model {
    static associate(models) {
      //Create associate in here.
      Sighting.hasMany(models.comment);
      // (M-M associations, need to have an object "{through: <table_name>}"" behind "belongsToMany")
      Sighting.belongsToMany(models.category, {
        through: "sightings_categories",
      })
    }
  }
  //USE JS SYNTAX HERE(camelCase) for the key (e.g. date, location, notes)
  Sighting.init(
    {
      date: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      location: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      notes: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
    },
    {
      sequelize,
      modelName: "sighting",
      // Tell sequelize to make sure it updates the "updated_at" & "created_at".
      timestamps: true,
      underscored: true,
      // Sequelize: snake_case;
      // JS: camelCase;
    }
  );
  return Sighting;
};
