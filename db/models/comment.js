const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    static associate(models) {
      //Create associate in here.
      Comment.belongsTo(models.sighting);
    }
  }
  //USE JS SYNTAX HERE(camelCase) for the key
  Comment.init(
    {
      sightingComment: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      sightingId: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "sighting",
          key: "id",
        },
      },
    },
    {
      sequelize,
      modelName: "comment",
      // Tell sequelize to make it updates the "updated_at" & "created_at"
      timestamps: true,
      underscored: true,
      // Sequelize: snake_case;
      // JS: camelCase;
    }
  );
  return Comment;
};
