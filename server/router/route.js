const express = require('express');
const router = express.Router();

const { signinController, getBooksController } = require('../controllers');

router.get('/books/view', getBooksController);
router.post('/signin', signinController);

module.exports = { router };
