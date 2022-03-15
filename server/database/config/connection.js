/* eslint-disable no-undef */
require('env2')('.env');
const { Pool } = require('pg');

let DB_URL = '';
const node_env = process.env.NODE_ENV;

if (node_env === 'production') {
  DB_URL = process.env.DATABASE_URL;
} else if (node_env === 'development') {
  DB_URL = process.env.DB_URL_DEV;
} else if (node_env === 'test') {
  DB_URL = process.env.DB_TESTING_URL;
} else {
  throw new Error('DB_URL NOT FOUND!');
}

const connection = new Pool({
  connectionString: DB_URL,
  ssl: false,
});

module.exports = connection;
