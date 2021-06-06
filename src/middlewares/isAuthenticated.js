const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth");

module.exports = {
  isAuthenticated(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: "JWT Token is missing" });
    }

    const token = authHeader.split(" ")[1];

    try {
      const decodedToken = jwt.verify(token, authConfig.jwt.secret);
      const { sub, username } = decodedToken;

      req.user = {
        id: sub,
        username,
      };
      return next();
    } catch (error) {
      return res.status(401).json({ message: "Invalid JWT" });
    }
  },
};
