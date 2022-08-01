const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

//create our user model
class User extends Model {}

//define table columns and configuration
User.init(
  {
    //TABLE COLUMN DEFINITIONS GO HERE
    //define an id column
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4],
      },
    },
  },

  {
    //TABLE CONFIGURATION OPTIONS GO HERE

    //PASS IN OUR IMPORTED SEQUELIZE CONNECTION (THE DIRECT CONNECTION TO OUR DATABASE)
    sequelize,
    //dont automatically create createdAt/updatedAt timestamp fields
    timestamps: false,
    //dont pluralize name of database table
    freezeTableName: true,
    //use underscores instead of cale-casing
    underscored: true,
    //make it so our model name stays lowercase in the database
    modelName: "user",
  }
);

module.exports = User;
