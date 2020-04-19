const userControllers = {};
const { User } = require("../models/index");

userControllers.registerUser = (req, res) => {
  User.create(req.body.data)
    .then(() => {
      res.sendStatus(201);
    })
    .catch((err) => res.sendStatus(400));
};

userControllers.loginUser = (req, res) => {
  res.json({
    name: req.user.firstName + " " + req.user.lastName,
    email: req.user.email,
  });
};

userControllers.isLogin = (req, res) => {
  res.json({
    name: req.user.firstName + " " + req.user.lastName,
    email: req.user.email,
  });
};

userControllers.logoutUser = (req, res) => {
  req.logout();
  res.sendStatus(204); // No content
};

module.exports = userControllers;
