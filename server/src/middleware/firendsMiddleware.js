var jwt = require("jsonwebtoken");
const privateKey = process.env.privateKey;



const friendsMiddleware = (req, res, next) => {
  const { auth } = req.headers;

  const valid_auth = auth.split(" ")[1];

  jwt.verify(valid_auth, privateKey, function (err, decoded) {
    if (err) {
      res.status(500).json({ msg: "error to Verify User !" });
    }
    if (decoded) {
      req.body.user = decoded.user;
      next();
    }
  });
};

module.exports = { friendsMiddleware };
