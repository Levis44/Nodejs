const express = require("express");
const router = express.Router();

const { verifyUserExists } = require("../middlewares/middle.js");

const { OperationServices } = require("../services/OperationServices.js");
const { Operation } = require("../classes/Operation.js");

router.post("/deposit", verifyUserExists, (req, res) => {
  const { description, amount } = req.body;
  const { user } = req;

  const operation = new Operation(description, amount, "credit");

  OperationServices.move(user, operation);
  OperationServices.getBalance(user, operation);

  res.status(201).send(user);
});

router.post("/withdraw", verifyUserExists, (req, res) => {
  const { description, amount } = req.body;
  const { user } = req;

  const balance = user.balance;

  if (balance < amount) {
    return res.status(400).json({ error: "Insufficient funds" });
  }

  const operation = new Operation(description, amount, "debit");

  OperationServices.move(user, operation);
  OperationServices.getBalance(user, operation);

  res.status(201).send(user);
});

module.exports = router;
