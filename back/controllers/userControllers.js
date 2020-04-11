const userControllers = {};
const { User } = require("../models/index");

userControllers.registerUser = (req, res) => {
  User.create(req.body.data)
    .then((user) => {
      res.status(201).send(user);
    })
    .catch((err) => res.sendStatus(400));
};

userControllers.loginUser = (req, res) => {
  res.send(req.user);
};

userControllers.logoutUser = (req, res) => {
  req.logout();
  res.sendStatus(204); // No content
};

module.exports = userControllers;
