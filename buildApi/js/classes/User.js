const { uuid } = require("uuidv4");

class User {
  constructor(name, age) {
    this.id = uuid();
    this.name = name;
    this.age = age;
    this.balance = 0;
    this.moves = [];

    return this;
  }
}

module.exports = User;
