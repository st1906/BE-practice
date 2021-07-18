"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize) => {
  class Friend extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Friend.init(
    {
      firstName: {
        type: "string",
        allowNull: false,
      },
      lastName: {
        type: "string",
        allowNull: false,
      },
      nickname: {
        type: "string",
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Friend",
    }
  );
  return Friend;
};
