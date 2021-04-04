const db = require("../db/db.js");

class funcs {
  static getBalance(user, operation) {
    const type = operation.type;
    const amount = operation.amount;

    if (type === "credit") {
      user.balance += amount;
      return;
    }

    user.balance -= amount;

    return;
  }
}

module.exports = funcs;
