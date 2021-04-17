const express = require("express");
const routes = require("./routes");

require("./database");

// const Sequelize = require("sequelize");

// const db = new Sequelize(
//   "ixdnddgf",
//   "ixdnddgf",
//   "8X59vv2kv3207iZjBQCYEvMIoPn6uVF9",
//   {
//     host: "tuffi.db.elephantsql.com",
//     dialect: "postgres",
//     operatorsAliases: false,

//     pool: {
//       max: 5,
//       min: 0,
//       acquire: 30000,
//       idle: 10000,
//     },
//   }
// );

// db.authenticate()
//   .then(() => {
//     console.log("Connection has been established successfully.");
//   })
//   .catch((err) => {
//     console.error("Unable to connect to the database:", err);
//   });

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3000, () => console.log("Server rodandoo"));
