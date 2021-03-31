const db = require("../db/db.js");

class UserServices {
  addUser(user) {
    db.push(user);
  }

  deleteUser(user) {
    const index = db.indexOf(user);

    if (index >= 0) {
      db.splice(index, 1);
      return true;
    }

    return false;
  }
}

module.exports = UserServices;
