const { User } = require("../models");
const userData = [
  {
    username: "Ana",
    password: "loveu",
    email: "ana1@gmail.com",
  },
  {
    username: "dianagal",
    password: "kindu",
    email: "diana1@gmail.com",
  },
  {
    username: "christinagal",
    password: "prettyu",
    email: "christina1@gmail.com",
  },
  {
    username: "katiedoe",
    password: "faru",
    email: "katiedoe@gmail.com",
  },
];
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
