const Sequelize = require("sequelize");

const User = require("../models/User");
const Address = require("../models/Address");
const Tech = require("../models/Tech");

const connection = new Sequelize(
  "jcgsyyze",
  "jcgsyyze",
  "EUbTvUuTUJbsnBga8QEtS9ZObJ802q6n",
  {
    host: "tuffi.db.elephantsql.com",
    dialect: "postgres",
    operatorsAliases: false,

    define: {
      timestamps: true,
      underscored: true,
    },
  }
);

User.init(connection);
Address.init(connection);
Tech.init(connection);

Address.associate(connection.models);
User.associate(connection.models);
Tech.associate(connection.models);

module.exports = connection;
