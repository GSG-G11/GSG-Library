const connection = require('../config/connection');

// eslint-disable-next-line no-unused-vars
const addUserQuery = (username, email, password, isAdmin) => {
  return connection.query({
    text: 'INSERT INTO users (username, email, password, isAdmin) values ($1, $2, $3, false)',
    values: [username, email, password],
  });
};

module.exports = addUserQuery;
