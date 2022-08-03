const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");
const bcrypt = require("bcrypt");
//create our user model
class User extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

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
      unique: true,
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
    hooks: {
      async beforeCreate(newUserData) {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      async beforeUpdate(updatedUserData) {
        updatedUserData.password = await bcrypt.hash(
          updatedUserData.password,
          10
        );
        return updatedUserData;
      },
    },

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
