const { uuid } = require("uuidv4");
const db = require("../db/db.js");

class createUser {
  constructor(name, age) {
    const user = {
      id: uuid(),
      name,
      age,
    };

    db.push(user);

    return user;
  }
}

module.exports = createUser;
