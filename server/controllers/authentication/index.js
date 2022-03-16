const jwt = require('jsonwebtoken');
require('env2')('.env');

const privetKey = process.env.SECRET_KEY;

const checkAuth = (req, res, next) => {
  const token = req.cookies.access_token;
  jwt.verify(token, privetKey, (err, decodeToken) => {
    if (err) {
      res.send('Error');
      console.log(err);
    } else {
      if (decodeToken.id) {
        req.myToken = decodeToken;
        next();
      } else {
        res.send('Login Page');
      }
    }
  });
};

module.exports = {
  checkAuth,
};
