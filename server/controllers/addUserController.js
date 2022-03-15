/* eslint-disable no-undef */
const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');
const { addUserQuery, checkEmailsQuery } = require('../database');
const privateKey = process.env.SECRET_KEY;

const addUserController = (req, res) => {
  console.log(req.body);
  const { id, username, email, password } = req.body;
  checkEmailsQuery(email)
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
      sign({ id, username, email }, privateKey, (err, token) => {
        if (token) {
          res
            .cookie('access_token', token, { httpOnly: true, secure: true })
            .json({ msg: 'Registered Successfulllly, LOL!' });
          return data;
        } else {
          res.json({ msg: 'Error!' });
        }
      });
    })
    .catch((err) => {
      if (err.cause == 'user found') res.json(err.message);
      else res.json('internal server error');
    });
};

module.exports = addUserController;
