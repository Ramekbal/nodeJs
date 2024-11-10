const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");

const validateToken = asyncHandler(async (req, res, next) => {
  console.log("calling====", req);
  const { headers } = req;
  console.log("123456789", headers);
  let token;
  let authHeader = headers.authorization || headers.Authorization;
  if (authHeader && authHeader.startsWith("Bearer")) {
    token = authHeader.split(" ")[1];
    jwt.verify(token, process.env.JWT_SECRET, (error, decoded) => {
      if (error) {
        res.status(401).json("Not authorized, token failed");
        // throw new Error("Not authorized, token failed");
      } else {
        req.user = decoded.user;
        next();
        console.log("123", decoded);
      }
    });
    if (!token) {
      res.status(401).json("Not authorized, no token");
      // throw new Error("Not authorized, no token"
    }
  }
});

module.exports = validateToken;
