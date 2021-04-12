const express = require("express");

const account = require("./routes/account.js");
const balance = require("./routes/balance.js");

const app = express();

app.use(express.json());

app.use("/account", account);
app.use("/balance", balance);

app.listen(3000, () => console.log("Servidor Rodandoo"));
