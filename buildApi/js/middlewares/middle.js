const db = require("../db/db.js");

function verifyUserExists(req, res, next) {
  const { name } = req.headers;

  const user = db.find((user) => user.name === name);

  if (user) {
    return res.status(400).json({ error: "User Alredy Exists" });
  }

  req.name = name;

  next();
}

module.exports = verifyUserExists;
