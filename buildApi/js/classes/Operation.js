const { uuid } = require("uuidv4");

class Operation {
  constructor(description, amount, type) {
    this.id = uuid();
    this.description = description;
    this.amount = amount;
    this.created_at = new Date();
    if (type === "credit") {
      this.type = "credit";
    } else {
      this.type = "debit";
    }
  }
}

module.exports = { Operation };
