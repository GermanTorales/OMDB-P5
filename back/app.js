const express = require("express");
const path = require("path");
const passport = require("passport");
const session = require("express-session");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const Sequelize = require("./config/db");

//Initializations;
const app = express();
require("./config/passport");

//Config
app.set("port", process.env.PORT || 3000);
app.use(express.static(__dirname + "/public"));

//Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(
  session({
    secret: "mysecret",
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use(require("./routes/index"));

app.get("/*", (req, res) => {
  res.sendFile(__dirname + "/public/" + "index.html");
});

//Server and DB
Sequelize.sync({ force: false }).then(() => {
  console.log("DB is connected on POSTGRES");
  app.listen(app.get("port"), () => {
    console.log("Server on port: ", app.get("port"));
  });
});
