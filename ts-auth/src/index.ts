import "reflect-metadata";
import express from "express";

import "./database/connect";
import router from "./routes";

const app = express();

app.use(express.json());
app.use(router);

app.listen(3000, () => console.log("🔥 Application running!"));
