const router = require("express").Router();
const userController = require("../controllers/userControllers");
const passport = require("passport");
const { isAuthenticated } = require("../helpers/authUser");

router.post("/signup", userController.registerUser);

router.post(
  "/signin",
  passport.authenticate("local"),
  userController.loginUser
);

router.get("/islogin", isAuthenticated, userController.isLogin);

router.get("/logout", isAuthenticated, userController.logoutUser);

module.exports = router;
