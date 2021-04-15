const Sequelize = require("sequelize");

const connection = new Sequelize(
  "ixdnddgf",
  "ixdnddgf",
  "8X59vv2kv3207iZjBQCYEvMIoPn6uVF9",
  {
    host: "tuffi.db.elephantsql.com",
    dialect: "postgres",
    operatorsAliases: false,

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

module.exports = connection;
