const Sequelize = require("sequelize");

const connection = new Sequelize(
  "jcgsyyze",
  "jcgsyyze",
  "EUbTvUuTUJbsnBga8QEtS9ZObJ802q6n",
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
