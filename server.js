const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const path = require("path");
const exphbs = require("express-handlebars");
const hbs = exphbs.create({});

const app = express();
const PORT = process.env.PORT || 3002;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));
//turn on routes
//
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");
sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => console.log("Listening on port"));
});
