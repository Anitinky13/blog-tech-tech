const express = require("express");
const routes = require("./controllers");
const sequelize = require("./config/connection");
const path = require("path");

const helpers = require("./utils/helper");

const exphbs = require("express-handlebars");
const hbs = exphbs.create({ helpers });

const session = require("express-session");

const app = express();
const PORT = process.env.PORT || 3002;
const SequelizeStore = require("connect-session-sequelize")(session.Store);
const sess = {
  secret: "It is a secret secret",
  cookie: {
    expires: 15 * 60 * 1000,
  },
  resave: true,
  rolling: true,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(session(sess));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

//app.use(require("./controllers"));

//

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log("Listening on port"));
});
