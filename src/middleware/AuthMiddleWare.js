const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleWare = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({
        message: "No token!",
      });
    }

    if (!authHeader.startsWith("Bearer ")) {
      return res.status(401).json({
        message: "Invalid token format!",
      });
    }

    const token = authHeader.split(" ")[1];
    console.log("🚀 ~ authMiddleWare ~ token:", token);

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("🚀 ~ authMiddleWare ~ decoded:", decoded);

    req.user = decoded;

    next();
  } catch (error) {
    return res.status(401).json({
      message: "Invalid token or expired token!",
    });
  }
};

module.exports = authMiddleWare;
