const router = require("express").Router();
const { User, Favorites } = require("../models/index");
const { isAuthenticated } = require("../helpers/authUser");

router.get("/favorites", (req, res) => {
  User.findByPk(req.user.id)
    .then(user => {
      Favorites.findAll({ where: { userId: user.id } }).then(favorites => {
        res.status(200).send(favorites);
      });
    })
    .catch(err => console.log(err));
});

router.post("/add-favorite", isAuthenticated, (req, res) => {
  User.findByPk(req.user.id).then(user => {
    Favorites.create({ ...req.body, userId: user.get("id") }).then(favorite => {
      res.status(200).send(favorite);
    });
  });
});

module.exports = router;
