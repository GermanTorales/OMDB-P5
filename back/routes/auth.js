const router = require("express").Router();
const { User, Favorites } = require("../models/index");
const passport = require("passport");

router.post("/signup", (req, res) => {
  User.create(req.body)
    .then(user => {
      res.status(200).json({
        userId: user.id,
        userFirstName: user.firstName,
        userLastName: user.lastName,
        userEmail: user.email
      });
    })
    .catch(err => res.json(err));
});

router.post("/signin", passport.authenticate("local"), (req, res) => {
  res.status(200).json({
    userId: req.user.id,
    userFirstName: req.user.firstName,
    userLastName: req.user.lastName,
    userEmail: req.user.email
  });
});

router.get("/logout", (req, res) => {
  req.logOut();
  res.sendStatus(201);
});

module.exports = router;
