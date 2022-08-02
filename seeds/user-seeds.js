const { User } = require("../models");
const userData = [
  {
    username: "Ana",
    password: "12345",
    email: "ana1@gmail.com",
  },
  {
    username: "dianagal",
    password: "123456",
    email: "diana1@gmail.com",
  },
  {
    username: "christinagal",
    password: "123",
    email: "christina1@gmail.com",
  },
  {
    username: "katiedoe",
    password: "1234567",
    email: "katiedoe@gmail.com",
  },
];
const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
