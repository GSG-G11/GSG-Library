const { join } = require('path');
const express = require('express');
const router = express.Router();
const { checkAuth } = require('../controllers/authentication');

const {
  signinController,
  getBooksController,
  addToFavouriteController,
  addUserController,
  logoutController,
} = require('../controllers');

router.get('/', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'views', 'signup.html'));
});

router.get('/logged', (req, res) => {
  res.sendFile(join(__dirname, '..', '..', 'views', 'main.html'));
});

router.get('/books/view', getBooksController);
router.post('/signin', signinController);
router.post('/signup', addUserController);
router.post('/book/:id/favourite', checkAuth, addToFavouriteController);
router.get('/logout', checkAuth, logoutController);
// router.get('/server/error', serverError);

module.exports = { router };
