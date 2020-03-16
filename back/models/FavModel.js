const S = require("sequelize");
const db = require("../config/db");

var Favorites = db.define(
  "favorite",
  {
    movieId: S.STRING
  },
  {
    timestamps: false
  }
);

module.exports = Favorites;
