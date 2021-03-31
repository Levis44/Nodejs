const { uuid } = require("uuidv4");

class User {
  constructor(name, age) {
    this.id = uuid();
    this.name = name;
    this.age = age;

    return this;
  }
}

module.exports = User;
