const router = require("express").Router()
const { isAuthenticated } = require("../helpers/authUser");
const favController = require('../controllers/favControllers')

router.get("/favorites", favController.getFavoritesByUser);

router.post("/add-favorite", isAuthenticated, favController.addFavorite);

module.exports = router;
