/* eslint-disable no-undef */
const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');
const { addUserQuery, checkEmailsQuery } = require('../database');
const { signupSchema } = require('../validation');

const privateKey = process.env.SECRET_KEY;

const addUserController = (req, res) => {
  const { username, email, password } = req.body;
  const { error, value } = signupSchema.validate(
    { username, email, password },
    { abortEarly: false }
  );
  if (error) {
    res.status(401).json({ message: error.details[0].message }).end();
  } else {
    checkEmailsQuery(value.email)
      .then((data) => {
        if (data.rowCount === 0) {
          return bcrypt.hash(password, 10);
        } else {
          throw {
            message: 'The email exist! login instead!',
            cause: 'user found',
          };
        }
      })
      .then((hashedPassword) => {
        return addUserQuery(username, email, hashedPassword);
      })
      .then((data) => {
        const { id, username, email } = data.rows[0];
        sign({ id, username, email }, privateKey, (err, token) => {
          if (token) {
            res
              .cookie('access_token', token, { httpOnly: true, secure: true })
              .status(200)
              .json({ message: 'Registered Successfully!' });
            return data;
          } else {
            res.status(500).json({ message: 'Error!' });
          }
        });
      })
      .catch((err) => {
        if (err.cause == 'user found')
          res.status(401).json({message : 'The email exist! login instead!'});
        else res.status(500).json({ message: 'internal server error' });
      });
  }
};

module.exports = addUserController;
