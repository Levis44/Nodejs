const func = require("../functions/func.js");
const db = require("../db/db.js");

function verifyUserExists(req, res, next) {
  const { name } = req.headers;

  const user = db.find((user) => user.name === name);

  if (!user) {
    return res.status(404).json({ error: "User does not Exists" });
  }

  req.user = user;

  next();
}

function verifyUserExistsDelete(req, res, next) {
  const { id } = req.headers;

  const user = db.find((user) => user.id === id);

  if (!user) {
    return res.status(404).json({ error: "User does not Exists" });
  }

  req.user = user;

  next();
}

module.exports = {
  verifyUserExists,
  verifyUserExistsDelete,
};
