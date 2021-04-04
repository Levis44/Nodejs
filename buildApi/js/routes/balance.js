const express = require("express");
const router = express.Router();

const { verifyUserExists } = require("../middlewares/middle.js");

const funcs = require("../functions/func.js");

router.post("/deposit", verifyUserExists, (req, res) => {
  const { description, amount } = req.body;
  const { user } = req;

  const operation = {
    description,
    amount,
    created_at: new Date(),
    type: "credit",
  };

  user.moves.push(operation);

  funcs.getBalance(user, operation);

  res.status(201).send(user);
});

router.post("/withdraw", verifyUserExists, (req, res) => {
  const { amount } = req.body;
  const { user } = req;

  const balance = user.balance;

  if (balance < amount) {
    return res.status(400).json({ error: "Insufficient funds" });
  }

  const operation = {
    amount,
    created_at: new Date(),
    type: "debit",
  };

  user.moves.push(operation);

  funcs.getBalance(user, operation);

  res.status(201).send(user);
});

module.exports = router;
