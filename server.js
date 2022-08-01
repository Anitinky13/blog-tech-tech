const { Console } = require("console");
const express = require("express");
const sequelize = require("./config/connection");

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//turn on routes
//
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => Console.log("Listening on port"));
});
