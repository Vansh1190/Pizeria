const jwt = require('jsonwebtoken');
require('dotenv').config();

const fetchUser = async (req, res, next) => {
  let LoggedIn = false;
  console.log(req.headers)
  const { token } = req.headers;
  LoggedIn = jwt.verify(token, process.env.Secret, (err, response) => {
    if (!response) {
      res.status(401).send('Access denied USER NOT LoggedIn');
      return false;
    }
    res.Userid = { UserName: response.userName };
    return true;
  });

  if (LoggedIn) {
    next();
  }
};

module.exports = fetchUser;
