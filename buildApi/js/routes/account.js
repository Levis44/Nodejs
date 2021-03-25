const express = require("express");
const router = express.Router();

const db = require("../db/db.js");
const verifyUserExists = require("../middlewares/middle.js");

router.post("/", verifyUserExists, (req, res) => {
  const { name } = req;
  const { age } = req.body;

  const user = {
    name,
    age,
  };

  db.push(user);

  return res.status(201).send();
});

router.delete("/:name", (req, res) => {
  console.log("Funcionando");
});

router.get("/", (req, res) => {
  res.send(db);
});

module.exports = router;
