const router = require("express").Router();

router.use("/user", require("./user")); //Ruta de usuarios
router.use("/auth", require("./auth")); //Ruta de logeo y registro

module.exports = router;
