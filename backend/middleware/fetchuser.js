const jwt = require('jsonwebtoken');
const JWT_SECRET = "JZSIOSDNMNJKXDFJDJJIIDFKMNDFNMJISDJNS";

const fetchuser = (req, res, next) => {
  // ✅ Correct header key:
  const token = req.header('auth-token');
  if (!token) {
    return res.status(401).json({ success: false, error: "Access denied: No token provided" });
  }

  try {
    const data = jwt.verify(token, JWT_SECRET);
    req.user = data.user;
    next();
  } catch (error) {
    return res.status(401).json({ success: false, error: "Access denied: Invalid token" });
  }
};

module.exports = fetchuser;
