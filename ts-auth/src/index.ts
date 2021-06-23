import "reflect-metadata";
import express from "express";

import "./database/connect";
import routes from "./routes";

const app = express();

app.use(routes);
app.use(express.json());

app.listen(3000, () => console.log("Rodando!"));
