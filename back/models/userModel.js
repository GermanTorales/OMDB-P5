const S = require("sequelize");
const db = require("../config/db");
const crypto = require("crypto");

class User extends S.Model {
  static getSalt(){
    return user.salt = crypto.randomBytes(20).toString("hex");
  }

  static hashPassword(password, salt){
    return crypto.createHmac("sha1", salt).update(password).digest("hex");
  }

  validPassword(password){
    return this.password === User.hashPassword(password, this.salt)
  }
}

User.init(
  {
    firstName: { type: S.STRING, allowNull: false },
    lastName: { type: S.STRING, allowNull: false },
    email: {
      type: S.STRING,
      unique: true,
      validate: { isEmail: true, notEmpty: true }
    },
    password: { type: S.STRING, allowNull: false },
    salt: { type: S.STRING }
  },
  { sequelize: db, modelName: "user" }
);

module.exports = User;
