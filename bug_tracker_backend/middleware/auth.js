const jwt = require("jsonwebtoken");
const jwtSecret =
  process.env.JWT_SECRET ||
  "eafc94e1d4b9b8efc87a3d829d19d4c5e3a8a87432c6eb5b7d7f456c2e4f5a3e";

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) return res.sendStatus(401);

  jwt.verify(token, jwtSecret, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

module.exports = authenticateToken;
