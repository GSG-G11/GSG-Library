const { sign } = require('jsonwebtoken');
const {checkEmailsQuery} = require('../database');
const privateKey = process.env.secretKey;
const { compare } = require('bcrypt');

const signIn = (req, res) => {
  const { email, password, username ,id} = req.body
  checkEmailsQuery(email)
    .then((data) => {
      if (!data.rows.length) {
        return res.send('Please! Create Account First!')
      } else {
        const { password: hashedPassword } = data.rows[0]
        return compare(password, hashedPassword)
      }
    })
    .then((isMatched) => {
      if (isMatched) {
        sign(
          {
            id,
            username,
            email,
          },
          privateKey,
          (err, token) => {
            res.cookie('access_token', token).json({ msg: 'success' })
          },
        )
      } else {
        res.status(400).json({ msg: 'please write a correct password' })
      }
    })
    .catch((err) => {
      console.log(err)
    })
}
module.exports = signIn
