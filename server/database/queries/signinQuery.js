const connection = require('../config/connection');

module.exports = (email,password) => connection.query('SELECT * FROM users WHERE email= $1 AND password= $2', [email, password]);