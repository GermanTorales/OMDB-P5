const User = require("./userModel");
const Favorites = require("./FavModel.js");

User.hasMany(Favorites, { as: "userID" });

module.exports = { User, Favorites };
