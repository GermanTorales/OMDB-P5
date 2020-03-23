const Sequelize = require("sequelize");

const db = new Sequelize(process.env.DB_URI, {
  logging: process.env.LOGGING,
  dialect: process.env.DB_DIALECT
});
module.exports = db;
