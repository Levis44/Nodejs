class OperationServices {
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

  static move(user, operation) {
    user.moves.push(operation);
  }
}

module.exports = { OperationServices };
