const express = require('express');
const router = express.Router();

const { addUser } = require('../controllers');

router.post('/signup', addUser);

module.exports = { router };
