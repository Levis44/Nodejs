const express = require("express");
const router = express.Router();

const db = require("../db/db.js");
const { verifyUserExists } = require("../middlewares/middle.js");

const User = require("../classes/User.js");
const UserServices = require("../services/UserServices.js");

const func = require("../functions/func.js");

router.post("/", (req, res) => {
  const { nome } = req.headers;
  const { name, age } = req.body;

  const userAlredyExists = db.some((user) => user.name === nome);

  if (userAlredyExists) {
    return res.status(400).json({ error: "User Alredy Exists" });
  }

  if (age < 18) {
    return res.status(400).json({ error: "User is under the allowed age age" });
  }

  const user = new User(name, age);
  UserServices.addUser(user);

  return res.status(201).json(user);
});

router.delete("/", verifyUserExists, (req, res) => {
  const { user } = req;

  const succes = UserServices.deleteUser(user);

  if (!succes) {
    return res.status(400).json({ error: "Error when trying to delete user" });
  }

  return res.status(200).json(db);
});

router.get("/", (req, res) => {
  res.send(db);
});

// router.put("/", verifyUserExists, (req, res) => {
//   const { user } = req;
//   const { age } = req.body;

//   user.age = age;

//   return res.status(200).json(user);
// });

module.exports = router;
