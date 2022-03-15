/* eslint-disable no-undef */
const bcrypt = require('bcrypt');
const { sign } = require('jsonwebtoken');
const { addUserQuery, checkEmailsQuery } = require('../database');
const privateKey = process.env.SECRET_KEY;

const addUser = (req, res) => {
  const { id, username, email, password } = req.body;
  checkEmailsQuery(email)
    .then((data) => {
      if (data.rowCount === 0) {
        return bcrypt.hash(password, 10);
      } else {
        res.json({ msg: 'The email is exist! Login instead!' });
        return;
      }
    })
    .then((hashedPassword) => {
      if (hashedPassword) {
        return addUserQuery(username, email, hashedPassword);
      }
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
          return;
        }
      });
    })
    .catch((err) => console.log(err));
};

module.exports = addUser;
