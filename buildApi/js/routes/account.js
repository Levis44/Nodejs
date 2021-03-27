const express = require("express");
const router = express.Router();

const db = require("../db/db.js");
const {
  verifyUserExists,
  verifyUserExistsDelete,
} = require("../middlewares/middle.js");

const createUser = require("../classes/createUser.js");
const deleteUser = require("../classes/deleteUser.js");

const func = require("../functions/func.js");

router.post("/", (req, res) => {
  const { nome } = req.headers;
  const { name, age } = req.body;

  const userAlredyExists = db.some((user) => user.name === nome);

  if (userAlredyExists) {
    return res.status(400).json({ error: "User Alredy Exists" });
  }

  const user = new createUser(name, age);

  return res.status(201).json(user);
});

router.delete("/", verifyUserExistsDelete, (req, res) => {
  const { user } = req;

  const succes = deleteUser.delete(user);

  if (!succes) {
    return res.status(400).json({ error: "Error when trying to delete user" });
  }

  return res.status(200).json(db);
});

router.get("/", (req, res) => {
  res.send(db);
});

router.put("/", verifyUserExists, (req, res) => {
  const { user } = req;
  const { age } = req.body;

  user.age = age;

  return res.status(200).json(user);
});

module.exports = router;
