const express = require("express");
const account = require("./routes/account.js");

const app = express();

app.use(express.json());

app.use("/account", account);

app.listen(3000, () => console.log("Servidor Rodandoo"));
