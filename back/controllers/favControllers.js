const favController = {}
const {User, Favorites} = require('../models/index')

favController.getFavoritesByUser = (req, res) => {
  User.findByPk(req.user.id)
    .then(user => {
      Favorites.findAll({ where: { userId: user.id } }).then(favorites => {
        res.status(200).send(favorites);
      });
    })
    .catch(err => res.sendStatus(404));
}

favController.addFavorite = (req, res) => {
  User.findByPk(req.user.id)
    .then(user => {
      Favorites.create({ ...req.body, userId: user.get("id") })
        .then(favorite => {
          res.status(200).send(favorite);
        })
        .catch(err => res.sendStatus(401))
    });
}

module.exports = favController
