const db = require("../db/db.js");

class deleteUser {
  static delete(user) {
    const index = db.indexOf(user);

    if (index >= 0) {
      db.splice(index, 1);
      return true;
    }

    return false;
  }
}

module.exports = deleteUser;
