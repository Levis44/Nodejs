const express = require("express");
const router = express.Router();

const db = require("../db/db.js");
const verifyUserExists = require("../middlewares/middle.js");
const createUser = require("../classes/createUser.js");

router.post("/", verifyUserExists, (req, res) => {
  const { name } = req;
  const { age } = req.body;

  const user = new createUser(name, age);

  return res.status(201).json(user);
});

router.delete("/:id", (req, res) => {
  console.log("Funcionando");
});

router.get("/", (req, res) => {
  res.send(db);
});

module.exports = router;
