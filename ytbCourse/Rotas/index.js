const express = require('express');
let bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.send("Olá")
})

app.get("/ola/:nome", (req, res) => {
    let nome = req.params.nome

    res.send("Olá " + nome);
})

app.listen(3000, () => {
    console.log("Server rodando");
})