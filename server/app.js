const express = require('express');
const middleware = require('./middleware/');
require('env2')('.env');

const app = express();

middleware(app);

// eslint-disable-next-line no-undef
app.set('port', process.env.PORT || 4000);

module.exports = app;
