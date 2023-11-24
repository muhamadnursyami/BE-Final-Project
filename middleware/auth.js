require("dotenv").config();
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  try {
    const header = req.headers.authorization;
    if (!header) {
      throw new Error("invalid header");
    }
    const token = header.split(" ")[1];
    if (!token) throw new Error("Authentication invalid");

    const payload = jwt.verify(token, process.env.JWT_KEY);
    req.user = {
      role: payload.role,
    };
    next();
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      res.status(400).json("Unauthorized to access this route");
    }
    next();
  };
};

module.exports = { verifyToken, authorizeRoles };
