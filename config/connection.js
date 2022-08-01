//import the Sequelize constructor from the library
const Sequelize = require("sequelize");
require("dotenv").config();
const sequelize = new Sequelize("blog_tech_tech_db", "username", "password", {
  host: "localhost",
  dialect: "mysql",
  port: 3306,
});

module.exports = sequelize;
