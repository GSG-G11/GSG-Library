const express = require('express');
const compression = require('compression');
const cookieParse = require('cookie-parser');
const { join } = require('path');
const { router } = require('../router/route');

module.exports = (app) => {
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(compression());
  app.disabled('x-powered-by');
  app.use(cookieParse());
  // eslint-disable-next-line no-undef
  app.use(express.static(join(__dirname, '..', '..', 'client')));
  app.use(router);
};
